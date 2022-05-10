#!/usr/bin/env node
import prettier from 'prettier'
// import liquid from 'liquid'
import { Liquid } from 'liquidjs'
import * as fs from 'fs'
import * as path from 'path'
import yargs from 'yargs'

import { OpenAPI, OpenAPIV2, OpenAPIV3 } from 'openapi-types'
import { normalizeV2Document, normalizeV3Document } from './parser'
import SwaggerParser from '@apidevtools/swagger-parser'
import { ISwaggerOptions, IInclude, IDefinitionClasses, IDefinitionEnums } from './baseInterfaces'
import { isOpenApi3, findDeepRefs, setDefinedGenericTypes, getDefinedGenericTypes, trimString } from './utils'
import { IDocument } from './swaggerInterfaces'
const engine = new Liquid()
engine.registerFilter('ucFirst', (str: string) => str.charAt(0).toUpperCase() + str.slice(1))

const args = yargs.options({
  url: { type: 'string', demandOption: false, alias: 'u' },
  'service-template': { type: 'string', demandOption: false, alias: 'st' },
  'definition-template': { type: 'string', demandOption: false, alias: 'dt' },
  output: { type: 'string', demandOption: false, alias: 'o' },
}).argv

const defaultOptions: ISwaggerOptions = {
  // isUmiRequest: true,
  // includeServiceHeaderSource: false, // 是否包含头文件
  serviceTemplateFile: args['service-template'] || path.join(__dirname, './template/service.liquid'),
  definitionTemplateFile: args['definition-template'] || path.join(__dirname, './template/definitions.liquid'),
  serviceNameSuffix: 'Service',
  remoteUrl: args.url || '',
  enumNamePrefix: 'Enum',
  // methodNameMode: 'operationId',
  outputDir: args.output || './service',
  fileName: 'index.ts',
  useStaticMethod: true,
  useCustomerRequestInstance: false,
  modelMode: 'interface',
  include: [],
  includeTypes: [],
  strictNullChecks: true,
  useClassTransformer: false,
  extendGenericType: [],
  multipleFileMode: false,
  sharedServiceOptions: false,
  useHeaderParameters: false,
}
export async function codegen(options?: ISwaggerOptions) {
  options = { ...defaultOptions, ...options }
  let swaggerDocument = await SwaggerParser.parse(options.remoteUrl)
  if ('openapi' in swaggerDocument) {
    codegenV3(swaggerDocument as OpenAPIV3.Document, options)
  } else {
    codegenV2(swaggerDocument as OpenAPIV2.Document, options)
  }
}

/** main */
export async function codegenV2(swaggerDocument: OpenAPIV2.Document<{}>, options?: ISwaggerOptions) {
  let unifyDocument = normalizeV2Document(swaggerDocument as OpenAPIV2.Document)
  writeFile(options.outputDir || '', 'swagger.json', JSON.stringify(unifyDocument, null, 2))
  // console.info('creating definitions  file...')
  fs.readFile(path.resolve(options.definitionTemplateFile), function (err, data) {
    if (err) throw err
    // const definitions = liquid.render(data.toString(), unifyDocument)
    const definitions = engine.parseAndRender(data.toString(), unifyDocument).then(output => {
      writeFile(options.outputDir || '', 'definitions.ts', format(output, options))
    })
  })
  // console.info('creating service index file...')
  fs.readFile(path.resolve(path.join(__dirname, './template/index.liquid')), function (err, data) {
    if (err) throw err
    // const index = liquid.render(data.toString(), unifyDocument)
    engine.parseAndRender(data.toString(), unifyDocument).then(output => {
      writeFile(options.outputDir || '', 'index.ts', format(output, options))
    })

    // writeFile(options.outputDir || '', 'index.ts', format(index, options))
  })
  console.info('creating service files...')
  fs.readFile(path.resolve(options.serviceTemplateFile), function (err, data) {
    if (err) throw err
    const content = data.toString()
    unifyDocument.services.forEach(s => {
      // const service = liquid.render(content, s)
      engine.parseAndRender(content, s).then(output => {
        writeFile(options.outputDir || '', `${s.name}Service.ts`, format(output, options))
      })
      // writeFile(options.outputDir || '', `${s.name}Service.ts`, format(service, options))
    })
  })
  console.info('finished...')
}

/** main */
export async function codegenV3(swaggerDocument: OpenAPIV3.Document<{}>, options?: ISwaggerOptions) {
  let unifyDocument = normalizeV3Document(swaggerDocument as OpenAPIV3.Document)
  writeFile(options.outputDir || '', 'swagger.json', JSON.stringify(unifyDocument, null, 2))
  // console.info('creating definitions  file...')
  fs.readFile(path.resolve(options.definitionTemplateFile), function (err, data) {
    if (err) throw err
    // const definitions = liquid.render(data.toString(), unifyDocument)
    const definitions = engine.parseAndRender(data.toString(), unifyDocument).then(output => {
      writeFile(options.outputDir || '', 'definitions.ts', format(output, options))
    })
  })
  // console.info('creating service index file...')
  fs.readFile(path.resolve(path.join(__dirname, './template/index.liquid')), function (err, data) {
    if (err) throw err
    // const index = liquid.render(data.toString(), unifyDocument)
    engine.parseAndRender(data.toString(), unifyDocument).then(output => {
      writeFile(options.outputDir || '', 'index.ts', format(output, options))
    })

    // writeFile(options.outputDir || '', 'index.ts', format(index, options))
  })
  console.info('creating service files...')
  fs.readFile(path.resolve(options.serviceTemplateFile), function (err, data) {
    if (err) throw err
    const content = data.toString()
    unifyDocument.services.forEach(s => {
      // const service = liquid.render(content, s)
      engine.parseAndRender(content, s).then(output => {
        writeFile(options.outputDir || '', `${s.name}Service.ts`, format(output, options))
      })
      // writeFile(options.outputDir || '', `${s.name}Service.ts`, format(service, options))
    })
  })
  console.info('finished...')
}

// codegen()
function writeFile(fileDir: string, name: string, data: any) {
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir)
  }
  const filename = path.join(fileDir, name)
  // console.log('filename', filename)
  fs.writeFileSync(filename, data)
}

function format(text: string, options: ISwaggerOptions) {
  if (options.format) {
    // console.log('use custom formatter')
    return options.format(text)
  }
  // console.log('use default formatter')
  return prettier.format(text, {
    printWidth: 120,
    tabWidth: 2,
    parser: 'typescript',
    trailingComma: 'none',
    jsxBracketSameLine: false,
    semi: false,
    singleQuote: true,
  })
  // return text
}
