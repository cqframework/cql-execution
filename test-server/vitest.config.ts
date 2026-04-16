import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    globals: true
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src')
    }
  }
});
