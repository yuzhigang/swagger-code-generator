#!/usr/bin/env node
import prettier from 'prettier'
import mustache from 'mustache';
import * as fs from 'fs'
import * as path from 'path'
import yargs from 'yargs';


import { OpenAPI, OpenAPIV2 } from "openapi-types";
import { normalizeV2Document } from './parser'
import SwaggerParser from "@apidevtools/swagger-parser";
import { ISwaggerOptions, IInclude, IDefinitionClasses, IDefinitionEnums } from './baseInterfaces'
import { isOpenApi3, findDeepRefs, setDefinedGenericTypes, getDefinedGenericTypes, trimString } from './utils'
import { IDocument } from './swaggerInterfaces';

const args = yargs.options({
  'url': { type: 'string', demandOption: true, alias: 'u' },
  'service-template': { type: 'string', demandOption: false, alias: 'st' },
  'definition-template': { type: 'string', demandOption: false, alias: 'dt' },
  'output': { type: 'string', demandOption: false, alias: 'o' },
}).argv;

const options: ISwaggerOptions = {
  // isUmiRequest: true,
  // includeServiceHeaderSource: false, // 是否包含头文件
  serviceTemplateFile: args['service-template'] || './template/service.mustache',
  definitionTemplateFile: args['definition-template'] || './template/definitions.mustache',
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
  useHeaderParameters: false
}

/** main */
export async function codegen() {
  // options = { ...defaultOptions, ...options }
  let swaggerDocument = await SwaggerParser.parse(options.remoteUrl);
  let unifyDocument: IDocument
  if (swaggerDocument as OpenAPIV2.Document != null) {
    unifyDocument = normalizeV2Document(swaggerDocument as OpenAPIV2.Document)
    console.info('creating definitions  file...')
    fs.readFile(path.resolve(options.definitionTemplateFile), function (err, data) {
      if (err) throw err;
      const definitions = mustache.render(data.toString(), unifyDocument)
      writeFile(options.outputDir || '', "definitions.ts", format(definitions, options))
    });
    console.info('creating service index file...')
    fs.readFile(path.resolve("./template/index.mustache"), function (err, data) {
      if (err) throw err;
      const index = mustache.render(data.toString(), unifyDocument)
      writeFile(options.outputDir || '', "index.ts", format(index, options))
    });
    console.info('creating service files...')
    fs.readFile(path.resolve(options.serviceTemplateFile), function (err, data) {
      if (err) throw err;
      const content = data.toString();
      unifyDocument.services.forEach(s => {
        const service = mustache.render(content, s)
        writeFile(options.outputDir || '', `${s.name}Service.ts`, format(service, options))
      })
    });
    console.info('finished...')
  }
}
codegen()
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
    singleQuote: true
  })
  // return text
}
