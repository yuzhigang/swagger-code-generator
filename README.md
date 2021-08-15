# swagger-code-gen-liquid

generate swagger typescript code with self-definition liquid templates.  support swagger version 2.0 and 3.0+.
It builds swagger operations and schemas in typescript.

## how to use?

```shell
yarn add swagger-code-gen-liquid -D
```

or

```shell
npm install swagger-code-gen-liquid -D
```

Let's add a folder named 'swagger' in your project directory. write a js file named 'codegen.js'.

```shell
const { codegen } = require('swagger-code-gen-liquid')
codegen({
  remoteUrl: 'http://localhost:44353/swagger/v1/swagger.json', // your swagger json url,  v2.0 or 3.0+.
  definitionTemplateFile: 'definitions.liquid', // your swagger schema definition template, liquidjs file.
  serviceTemplateFile: 'service.liquid', // your swagger operations template, liquidjs file.
  outputDir: './services' // output dir
})
console.log('finished')
```

In your package.json, add a command:

```shell
"scripts": {
    "build:service": "node ./swagger/codegen.js"
  },
```

then:

```shell
npm run build:service
```

now we have a typescript class definitions and services in your services/ folder. Enjoy it.
