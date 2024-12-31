#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')

const init = async () => {
  let configContent = `
import { BaunilhaConfig } from '@baunilha/react';

// Run \`npx baunilha generate\` to regenerate if you change this file
const config: BaunilhaConfig = {
  output: 'src/tokens/',
  // unityType: 'rem',  // 'px' | 'rem'
  // defaultFontSize: 10,
  // theme: {},
};

export default config;
`.trim()

  const outputPath = path.resolve(process.cwd(), './baunilha.config.ts')
  fs.writeFileSync(outputPath, configContent, 'utf-8')

  console.log(`Config file generated in: ${outputPath}`)
}

module.exports = { init }
