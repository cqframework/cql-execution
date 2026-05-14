import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    globals: true
  },
  resolve: {
    alias: [
      { find: '@src', replacement: path.resolve(__dirname, 'src') },
      { find: /^cql-execution$/, replacement: path.resolve(__dirname, '../src/cql.ts') },
      {
        find: /^cql-execution\/lib\/(.+)$/,
        replacement: `${path.resolve(__dirname, '../src')}/$1`
      }
    ]
  }
});
