#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-require-imports */
const args = process.argv.slice(2)

const help = `
  Uso:
  
    npx baunilha init          -  Gera o arquivo de configurações

    npx baunilha generate      -  Gera o arquivo de variáveis

  Exemplos:

    npx baunilha-react init

    npx baunilha-react generate
`

switch (args[0]) {
  case 'init':
    const { init } = require('./scripts/init-config-file')
    init()
    break
  case 'generate':
    const { generate } = require('./scripts/generate-files')
    generate()
    break
  default:
    console.log(help.trim())
    break
}
