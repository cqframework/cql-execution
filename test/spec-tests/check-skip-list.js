// Iteratively recheck each skip-list entry by temporarily commenting it out,
// rebuilding, and running tests. Keeps entries that still cause failures,
// removes entries that now pass. Preserves all other lines as-is.

/* eslint-disable no-console */

const fs = require('fs/promises');
const path = require('path');
const { spawn } = require('child_process');

const SKIP_LIST_PATH = path.join(process.cwd(), 'test', 'spec-tests', 'skip-list.txt');

function run(cmd, args, opts = {}) {
  return new Promise(resolve => {
    const child = spawn(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'], ...opts });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', d => (stdout += d.toString()));
    child.stderr.on('data', d => (stderr += d.toString()));
    child.on('close', code => resolve({ code, stdout, stderr }));
  });
}

async function rebuildSpec() {
  const r = await run('npm', ['run', 'build:spec-test-data']);
  if (r.code !== 0) {
    const err = new Error('Spec test data build failed');
    err.detail = r.stderr || r.stdout;
    throw err;
  }
}

async function runTests() {
  const r = await run('npm', ['test', '--', 'test/spec-tests']);
  if (r.code !== 0) {
    return { ok: false };
  }
  return { ok: true };
}

function isComment(line) {
  return line.trimStart().startsWith('#');
}
function isBlank(line) {
  return line.trim() === '';
}
function firstToken(line) {
  const m = line.match(/^\s*("[^"]+"|\S+)/);
  return m ? m[1] : '';
}

async function main() {
  // Ensure the script is run from the project root
  try {
    await fs.stat(SKIP_LIST_PATH);
  } catch {
    console.error('The check-skip-list script must be run from the project root directory. Use "npm run check-skip-list".');
    process.exit(1);
  }

  console.log('NOTE: This script incrementally modifies the file: test/spec-tests/skip-list.txt.');
  console.log('If you abort the script before it is completed, check that file to ensure it is correct.\n');

  const originalText = await fs.readFile(SKIP_LIST_PATH, 'utf8');
  const nl = originalText.includes('\r\n') ? '\r\n' : '\n';
  let lines = originalText.split(/\r?\n/);

  // Baseline: ensure tests pass before any changes
  console.log('Running baseline tests...');
  const base = await runTests();
  if (!base.ok) {
    console.error('Baseline tests failed. Aborting without changes.');
    process.exit(1);
  }
  console.log('Baseline tests passed.');

  let totalCandidateTests = 0;
  let totalCandidateSuites = 0;
  let processed = 0;
  let removed = 0;
  let kept = 0;

  // First count the total candidates
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (isBlank(line) || isComment(line)) {
      continue;
    }
    const parts = firstToken(line).split('.');
    if (parts.length > 2) {
      totalCandidateTests++;
    } else {
      totalCandidateSuites++;
    }
  }
  console.log(`\nOriginal skip-list.txt file skips ${totalCandidateSuites} test suites and ${totalCandidateTests} test cases.`);

  // Iterate through skip-list entries
  for (let i = 0; i < lines.length; ) {
    const line = lines[i];
    if (isBlank(line) || isComment(line)) {
      i++;
      continue;
    }
    processed++;

    const token = firstToken(line);
    const originalLine = line;
    const commented = '# ' + originalLine;

    // Comment out current line
    lines[i] = commented;
    await fs.writeFile(SKIP_LIST_PATH, lines.join(nl), 'utf8');

    // Rebuild then tests
    console.log(`\n[${processed}/${totalCandidateSuites + totalCandidateTests}] Testing without skipping ${token}`);
    try {
      await rebuildSpec();
    } catch (e) {
      console.error('Build failed after commenting out a line. Restoring and continuing.');
      console.error(e.detail || e.message);
      lines[i] = originalLine;
      await fs.writeFile(SKIP_LIST_PATH, lines.join(nl), 'utf8');
      i++; // move to next line
      continue;
    }

    const res = await runTests();
    if (!res.ok) {
      // Test run failed -> this entry still needs to be skipped; restore line
      console.log(`- Still failing. Keeping skip.`);
      lines[i] = originalLine;
      await fs.writeFile(SKIP_LIST_PATH, lines.join(nl), 'utf8');
      kept++;
      i++; // move to next line
    } else {
      // Test run passed -> remove this line permanently
      console.log(`- Now passing. Removing skip.`);
      lines.splice(i, 1);
      await fs.writeFile(SKIP_LIST_PATH, lines.join(nl), 'utf8');
      removed++;
      // do not increment i; next line shifts into this index
    }
  }

  // Final rebuild + verification run
  console.log('\nRebuilding spec test data for final verification...');
  try {
    await rebuildSpec();
  } catch (e) {
    console.error('Final build failed. Aborting with current state preserved.');
    console.error(e.detail || e.message);
    process.exit(1);
  }

  console.log('Running final tests...');
  const finalRes = await runTests();
  if (!finalRes.ok) {
    console.error(
      'Final tests failed after processing skip-list. Aborting with current state preserved.'
    );
    process.exit(1);
  }

  console.log('\nDone.');
  console.log(`- Total candidate entries checked: ${processed}`);
  console.log(`- Removed (now passing): ${removed}`);
  console.log(`- Kept (still failing): ${kept}`);
  process.exit(0);
}

main().catch(err => {
  console.error('Unexpected error:', err.message);
  process.exit(1);
});
