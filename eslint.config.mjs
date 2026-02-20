import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([
  globalIgnores([
    '**/.eslintrc.json',
    '**/lib',
    '**/lib-test',
    'examples/browser/cql4browsers.js',
    'test/elm/library/data-with-namespace.js'
  ]),
  {
    extends: compat.extends('plugin:@typescript-eslint/recommended', 'prettier'),
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha
      },
      parser: tsParser,
      ecmaVersion: 6,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { experimentalObjectRestSpread: true }
      }
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-unused-vars': 'off', // redundant to rule below
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      indent: ['error', 2, { SwitchCase: 1 }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-loss-of-precision': 'off',
      quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
      semi: ['error', 'always'],
      curly: 'error'
    }
  },
  {
    files: ['test/**/*.{js,ts}', 'examples/**/*.js', 'bin/**/*.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off'
    }
  }
]);
