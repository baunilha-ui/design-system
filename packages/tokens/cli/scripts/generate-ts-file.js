#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')

const generateTSFile = async ({ theme, outputFile }) => {
  let outputPath = path.resolve(process.cwd(), outputFile || './tokens.ts')

  const isDirectory = /\/$/.test(outputFile)

  if (isDirectory) {
    outputPath = path.join(outputPath, 'tokens.ts')
  }

  const existsOutputDir = fs.existsSync(outputPath)

  if (!existsOutputDir) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  }

  let TSContent = `
import { Theme } from '@baunilha/tokens';

export const theme: Theme = ${JSON.stringify(theme, null, 2)};
`.trim()

  fs.writeFileSync(outputPath, TSContent, 'utf-8')

  console.log(`Tokens Generated in: ${outputPath}`)
}

module.exports = { generateTSFile }
