import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'], // Ponto de entrada
  format: ['cjs', 'esm'], // Gera CommonJS e ES Modules
  dts: true, // Gera arquivos de tipos (.d.ts)
  sourcemap: true, // Inclui mapa de fontes para debugging
  external: ['react', 'react-dom'], // Exclui React do bundle
  clean: true, // Limpa a pasta de saída antes do build
})
