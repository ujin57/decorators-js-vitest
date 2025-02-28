import {defineConfig} from 'vitest/config'

export default defineConfig({
  esbuild: {
    target: 'es2022',
    include: ['**/*.js', '**/*.ts'],
    supported: {
      decorators: true
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.js', '**/*.test.ts'],
    reporters: ['verbose']
  }
})
