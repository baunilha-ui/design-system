#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-require-imports */
const { loadConfig } = require('./utils/load-config')
const { generateTSFile } = require('./generate-ts-file')

const { createTheme } = require('@baunilha/tokens')

const generate = async () => {
  const config = await loadConfig()

  const unityType = config.unityType
  const customTheme = config.theme

  const theme = createTheme({
    options: {
      unityType,
    },
    customTheme,
  })


  let tsOutputDir = config.output.ts || config.output || 'tokens/tokens.ts'
  generateTSFile({
    theme,
    outputFile: tsOutputDir,
  })
}

module.exports = { generate }
