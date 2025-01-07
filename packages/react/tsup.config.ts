import { defineConfig } from 'tsup'
import { sassPlugin, postcssModules } from 'esbuild-sass-plugin'
import path from 'path'

export default defineConfig({
  entry: ['src/index.tsx', 'src/client.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  clean: true,
  esbuildPlugins: [
    sassPlugin({
      type: 'css',
      transform: postcssModules({}),
      precompile(source, pathname) {
        const relativePath = path
          .relative(
            path.resolve(pathname),
            path.resolve('src', 'styles', 'breakpoints.scss'),
          )
          .replace(/^\.\.\//, '')

        if (!!relativePath) {
          return `@import '${relativePath}';\n${source}`
        }

        return source
      },
    }),
  ],
})
