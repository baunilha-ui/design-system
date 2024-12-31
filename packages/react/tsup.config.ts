import { defineConfig } from 'tsup'
import { sassPlugin, postcssModules } from 'esbuild-sass-plugin'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  clean: true,
  esbuildPlugins: [
    sassPlugin({
      type: 'css',
      transform: postcssModules({}),
    }),
  ],
})
