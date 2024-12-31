#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { createTheme } from '../theme/create-theme'
import { createCSSVariables } from '../utils/create-css-variables'
import { getLightTheme } from '../theme/get-light-theme'

// Função para carregar o arquivo de configuração
function loadConfig(filePath: string) {
  if (!fs.existsSync(filePath)) {
    console.error(`Arquivo de configuração não encontrado: ${filePath}`)
    process.exit(1)
  }

  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

// Caminho padrão para o arquivo de configuração
const configPath = path.resolve(process.cwd(), 'baunilha-ui.config.json')

// Carrega o arquivo de configuração
const config = loadConfig(configPath)

// Init ---
const theme = createTheme({
  options: { unityType: 'rem' },
})

const cssVariables = createCSSVariables(getLightTheme(theme))

let cssContent = ':root {\n'
Object.entries(cssVariables).forEach(([key, value]) => {
  cssContent += `  ${key}: ${value};\n`
})
cssContent += '}'

// Salva o arquivo no diretório de estilos
const outputPath = path.resolve(
  process.cwd(),
  config.output || './variables.scss',
)
// Salva o CSS gerado
fs.writeFileSync(outputPath, cssContent, 'utf-8')

console.log(`CSS gerado em: ${outputPath}`)
