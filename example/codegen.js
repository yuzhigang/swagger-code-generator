// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('../dist/index.js')

codegen({
  remoteUrl: 'https://ems-api.fastdatax.com/swagger/v1/swagger.json',
  outputDir: './services'
})
