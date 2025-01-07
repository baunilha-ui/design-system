#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-require-imports */
const { createCSSVariables } = require('@baunilha/tokens')
const fs = require('fs')
const path = require('path')

const mountVariables = (variables) => {
  let cssVariables = ''
  Object.entries(variables).forEach(([key, value]) => {
    cssVariables += `  ${key}: ${value};\n`
  })

  return cssVariables + `\n`
}

const generateCSSFile = async ({
  theme,
  outputFile,
  unityType,
  fontFamily,
}) => {
  // ----------- Init File
  //
  let cssContent = `  /* DON'T CHANGE THIS FILE, IT CAN BE OVERWRITTEN */\n\n`
  cssContent += '@use "@baunilha/react/styles/components"; \n'
  cssContent += '@use "@baunilha/react/styles/components/client"; \n\n'
  cssContent += ':root {\n'
  cssContent += `  /* -------- Generated Variables -------- */\n\n`

  if (unityType === 'rem') {
    cssContent += `  /*\n`
    cssContent += `  * You can change the default font size by the config file\n`
    cssContent += `  * \`defaultFontSize: 10\`\n`
    cssContent += `  * We recommend using the default value of 10, as it is easier to calculate the 'rem' values.\n`
    cssContent += `  * 1rem === 10px;\n`
    cssContent += `  */\n`
    cssContent += `  font-size: 10px;\n\n`
  }

  if (fontFamily) {
    cssContent += `  font-family: ${fontFamily};\n\n`
  }

  cssContent += `  /* -------- Spaces Variables -------- */\n\n`
  const maxWidthVariables = createCSSVariables(theme.maxWidth, '--max-width')
  cssContent += mountVariables(maxWidthVariables)
  cssContent += '\n'

  const spacesVariables = createCSSVariables(theme.space, '--space')

  cssContent += mountVariables(spacesVariables)

  cssContent += `  /* -------- Font Sizes Variables -------- */\n\n`
  const fontSizeVariables = createCSSVariables(theme.fontSize, '--font-size')

  cssContent += mountVariables(fontSizeVariables)

  cssContent += `  /* -------- Line Height Variables -------- */\n\n`
  const lineHeightVariables = createCSSVariables(
    theme.lineHeight,
    '--line-height',
  )

  cssContent += mountVariables(lineHeightVariables)

  cssContent += `  /* -------- Radii Variables -------- */\n\n`
  const radiiVariables = createCSSVariables(theme.radii, '--radii')

  cssContent += mountVariables(radiiVariables)

  cssContent += `  /* -------- Primary Colors -------- */\n\n`
  const primaryVariables = createCSSVariables(
    theme.colors.primary,
    '--colors-primary',
  )

  cssContent += mountVariables(primaryVariables)

  cssContent += `  /* -------- Secondary Colors -------- */\n\n`
  const secondaryVariables = createCSSVariables(
    theme.colors.secondary,
    '--colors-secondary',
  )

  cssContent += mountVariables(secondaryVariables)

  cssContent += '}\n\n'
  // ----------- End File

  // ----------- Start Light Theme
  cssContent += `/* -------- Light Colors -------- */\n`
  cssContent += ':root.light {\n'
  const lightThemeVariables = createCSSVariables(theme.colors.light, '--colors')

  cssContent += mountVariables(lightThemeVariables)

  cssContent += '}\n\n'
  // ----------- End Light Theme

  // ----------- Start Dark Theme
  cssContent += `/* -------- Dark Colors -------- */\n`
  cssContent += ':root.dark {\n'
  const darkThemeVariables = createCSSVariables(theme.colors.dark, '--colors')

  cssContent += mountVariables(darkThemeVariables)

  cssContent += '}\n\n'
  // ----------- End Dark Theme

  let outputPath = path.resolve(process.cwd(), outputFile || './tokens.scss')

  const isDirectory = /\/$/.test(outputFile)

  if (isDirectory) {
    outputPath = path.join(outputPath, 'tokens.scss')
  }

  const existsOutputDir = fs.existsSync(outputPath)

  const outputDir = path.dirname(outputPath)

  if (!existsOutputDir) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  fs.writeFileSync(outputPath, cssContent, 'utf-8')

  let breakpointsContent = `/* DON'T CHANGE THIS FILE, IT CAN BE OVERWRITTEN */\n`

  breakpointsContent += `$mobile: 768px;\n`
  breakpointsContent += `$tablet: 1024px;\n`
  breakpointsContent += `$desktop: 1140px;\n`
  breakpointsContent += `$widescreen: 1920px;\n\n`

  breakpointsContent += `@mixin mobile {\n`
  breakpointsContent += `  @media (max-width: $mobile) {\n`
  breakpointsContent += `    @content;\n`
  breakpointsContent += `  }\n`
  breakpointsContent += `}\n\n`

  breakpointsContent += `@mixin tablet {\n`
  breakpointsContent += `  @media (max-width: $tablet) {\n`
  breakpointsContent += `    @content;\n`
  breakpointsContent += `  }\n`
  breakpointsContent += `}\n\n`

  breakpointsContent += `@mixin desktop {\n`
  breakpointsContent += `  @media (min-width: $desktop) and (max-width: calc($widescreen - 1px)) {\n`
  breakpointsContent += `    @content;\n`
  breakpointsContent += `  }\n`
  breakpointsContent += `}\n\n`

  breakpointsContent += `@mixin widescreen {\n`
  breakpointsContent += `  @media (min-width: $widescreen) {\n`
  breakpointsContent += `    @content;\n`
  breakpointsContent += `  }\n`
  breakpointsContent += `}\n\n`

  const outputBreakpointsFile = path.join(outputDir, 'breakpoints.scss')
  fs.writeFileSync(outputBreakpointsFile, breakpointsContent, 'utf-8')

  console.log(`CSS Generated in: ${outputPath}`)
}

module.exports = { generateCSSFile }
