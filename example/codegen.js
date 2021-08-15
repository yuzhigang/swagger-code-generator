// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('../dist/index.js')

codegen({
  remoteUrl: 'http://49.235.198.206/swagger/v1/swagger.json',
  outputDir: './services'
})
