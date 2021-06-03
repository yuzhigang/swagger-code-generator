// import SwaggerParser from "@apidevtools/swagger-parser";
// const { isGenerics, refClassName, trimString } = require('../dist/utils')

const SwaggerParser = require('@apidevtools/swagger-parser')
const { codegen } = require('../dist/index')
// const swaggerDocument = SwaggerParser.parse("http://lgdd.ifixedbug.com/swagger/docs/v1").then((val) => {
//     console.log(val)
//     const doc = normalizeV2Document(val)
//     console.log(doc)
//     const definitions = mustache.render("definitions", doc)
//     writeFile('./services', "definitions.ts", format(definitions, options))
// })

codegen({
    remoteUrl: 'http://lgdd.ifixedbug.com/swagger/docs/v1',
    outputDir: './services'
})
console.log('finished')