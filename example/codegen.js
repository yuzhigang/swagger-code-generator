// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('../dist/index.js')

codegen({
  remoteUrl: 'http://localhost:44353/swagger/v1/swagger.json',
  outputDir: './services'
})
console.log('finished')
