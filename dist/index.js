#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.codegen = void 0;
const prettier_1 = __importDefault(require("prettier"));
const mustache_1 = __importDefault(require("mustache"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const yargs_1 = __importDefault(require("yargs"));
const parser_1 = require("./parser");
const swagger_parser_1 = __importDefault(require("@apidevtools/swagger-parser"));
const args = yargs_1.default.options({
    'url': { type: 'string', demandOption: true, alias: 'u' },
    'service-template': { type: 'string', demandOption: false, alias: 'st' },
    'definition-template': { type: 'string', demandOption: false, alias: 'dt' },
    'output': { type: 'string', demandOption: false, alias: 'o' },
}).argv;
const options = {
    // isUmiRequest: true,
    // includeServiceHeaderSource: false, // 是否包含头文件
    serviceTemplateFile: args['service-template'] || '/template/service.mustache',
    definitionTemplateFile: args['definition-template'] || '/template/definitions.mustache',
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
};
/** main */
function codegen() {
    return __awaiter(this, void 0, void 0, function* () {
        // options = { ...defaultOptions, ...options }
        let swaggerDocument = yield swagger_parser_1.default.parse(options.remoteUrl);
        let unifyDocument;
        if (swaggerDocument != null) {
            unifyDocument = parser_1.normalizeV2Document(swaggerDocument);
            console.info('creating definitions  file...');
            fs.readFile(path.resolve(__dirname, options.definitionTemplateFile), function (err, data) {
                if (err)
                    throw err;
                const definitions = mustache_1.default.render(data.toString(), unifyDocument);
                writeFile(options.outputDir || '', "definitions.ts", format(definitions, options));
            });
            console.info('creating service index file...');
            fs.readFile(path.resolve(__dirname, "./template/index.mustache"), function (err, data) {
                if (err)
                    throw err;
                const index = mustache_1.default.render(data.toString(), unifyDocument);
                writeFile(options.outputDir || '', "index.ts", format(index, options));
            });
            console.info('creating service files...');
            fs.readFile(path.resolve(__dirname, options.serviceTemplateFile), function (err, data) {
                if (err)
                    throw err;
                const content = data.toString();
                unifyDocument.services.forEach(s => {
                    const service = mustache_1.default.render(content, s);
                    writeFile(options.outputDir || '', `${s.name}Service.ts`, format(service, options));
                });
            });
            console.info('finished...');
        }
    });
}
exports.codegen = codegen;
codegen();
function writeFile(fileDir, name, data) {
    if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir);
    }
    const filename = path.join(fileDir, name);
    // console.log('filename', filename)
    fs.writeFileSync(filename, data);
}
function format(text, options) {
    if (options.format) {
        // console.log('use custom formatter')
        return options.format(text);
    }
    // console.log('use default formatter')
    return prettier_1.default.format(text, {
        printWidth: 120,
        tabWidth: 2,
        parser: 'typescript',
        trailingComma: 'none',
        jsxBracketSameLine: false,
        semi: false,
        singleQuote: true
    });
    // return text
}
//# sourceMappingURL=index.js.map