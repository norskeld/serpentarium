import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  exports: {
    devExports: 'serpentarium',
  },
  dts: {
    sourcemap: true,
  },
})
