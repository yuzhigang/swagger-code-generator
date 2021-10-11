// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('../dist/index.js')

codegen({
  remoteUrl: 'http://120.53.123.213/swagger/v1/swagger.json',
  outputDir: './services'
})
