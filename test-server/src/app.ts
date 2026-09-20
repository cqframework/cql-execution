import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import logger from './logger';
import { $cql } from './operation';
import { TranslationError } from './translate';

const app = express();
app.use(express.json({ type: ['application/json', 'application/fhir+json'] }));
const port = process.env.PORT || 8000;

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
    // Per the spec, $cql should return an OperationOutcome on error,
    // but cql-tests-runner just displays the raw result as text
    // so simpler error messages are probably good enough
    if (err instanceof TranslationError) {
      return res.status(400).json({ error: err.message });
    }
    logger.error(`Error handling /fhir/$cql:`, err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  logger.info(`Ready to accept posts to http://localhost:${port}/fhir/$cql`);
});
