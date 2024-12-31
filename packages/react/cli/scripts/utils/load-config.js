/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')
const fs = require('fs')
const { build } = require('tsup')

async function loadConfig() {
  const tempDir = path.resolve(process.cwd(), '.baunilha_tmp')
  const tsConfigPath = path.resolve(process.cwd(), 'baunilha.config.ts')
  const jsConfigPath = path.resolve(tempDir, 'baunilha.config.js')
  const cjsConfigPath = path.resolve(tempDir, 'baunilha.config.cjs')

  if (fs.existsSync(tsConfigPath)) {
    console.log('Compiling TypeScript file to JavaScript...')

    await build({
      entry: [tsConfigPath],
      format: 'cjs',
      outDir: tempDir,
      clean: true,
    })

    const isCJS = fs.existsSync(cjsConfigPath)
    const isJS = fs.existsSync(jsConfigPath)

    console.log('Compilation completed. Using generated file.')
    let config = null

    if (isCJS) config = require(cjsConfigPath)
    if (isJS) config = require(jsConfigPath)

    fs.rmSync(tempDir, { recursive: true })

    if (!config) throw new Error('Error loading config file')

    return config.default || config
  } else {
    throw new Error(
      'Config file not found! Run `npx baunilha-react init` to create one.',
    )
  }
}

module.exports = { loadConfig }
