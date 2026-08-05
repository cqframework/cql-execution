import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import path from 'node:path';
import logger from './logger';
import { $cql, executeExpression } from './operation';

const app = express();
app.use(express.json({ type: ['application/json', 'application/fhir+json'] }));
app.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 8000;

function getCql(body: unknown): string | undefined {
  if (
    typeof body === 'object' &&
    body !== null &&
    'cql' in body &&
    typeof body.cql === 'string' &&
    body.cql.trim() !== ''
  ) {
    return body.cql;
  }
  return undefined;
}

app.post('/api/execute', async (req: Request, res: Response) => {
  const cql = getCql(req.body);
  if (!cql) {
    return res.status(400).json({ error: "Missing non-empty 'cql' string in request body" });
  }

  try {
    return res.json(await executeExpression(cql));
  } catch (err) {
    logger.error('Error executing CQL expression:', err);
    return res.status(422).json({
      error: err instanceof Error ? err.message : 'Unable to translate or execute the CQL expression'
    });
  }
});

app.post('/fhir/$cql', async (req: Request, res: Response) => {
  try {
    const body = req.body as unknown as { parameter?: any };
    const expression = body?.parameter?.find((p: any) => p.name === 'expression')?.valueString;
    if (!expression || typeof expression !== 'string' || expression.trim() === '') {
      return res.status(400).json({
        error: "Missing 'expression' parameter with CQL valueString in request body"
      });
    }
    const parameters = await $cql(expression);
    res.json(parameters);
  } catch (err) {
    logger.error(`Error handling /fhir/$cql:`, err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  logger.info(`Ready to accept posts to http://localhost:${port}/fhir/$cql`);
});
