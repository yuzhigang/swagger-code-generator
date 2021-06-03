"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponseType = exports.normalizeV2Document = exports.groupPathsToServices = void 0;
const utils_1 = require("./utils");
const camelcase_1 = __importDefault(require("camelcase"));
const baseMethods = ["post", "get", "delete", "put"];
function normalizeV2Property(name, item) {
    const property = {
        name: name,
        modelType: 'object',
        description: item.description
    };
    if (item.type === 'array') {
        if (item.items.$ref) {
            property.modelType = utils_1.refClassName(item.items.$ref) + '[]';
        }
        else {
            property.modelType = utils_1.toBaseType(item.items.type) + '[]';
        }
    }
    else {
        property.modelType = utils_1.toBaseType(item.type);
    }
    return property;
}
function normalizeV2ReferenceObject(item) {
}
function normalizeV2Parameter(item) {
    const param = {
        name: item.name.split('.').pop(),
        in: item.in,
        // type: item.type,
        description: item.description,
        required: item.required,
    };
    if (item.schema) {
        if (item.schema.items) {
            if (item.schema.items.$ref) {
                param.modelType = utils_1.refClassName(item.schema.items.$ref);
            }
            else {
                param.modelType = utils_1.toBaseType(item.schema.items.type);
            }
            if (item.schema.type && item.schema.type === 'array') {
                param.modelType += '[]';
            }
        }
        else if (item.schema.$ref) {
            param.modelType = utils_1.refClassName(item.schema.$ref);
            // console.log('param.modelType', refClassName(item.schema.$ref))
        }
        else if (item.schema.type) {
            param.modelType = utils_1.toBaseType(item.schema.type);
        }
        else {
            throw new Error('Could not find property type on schema');
        }
    }
    else if (item.items) {
        param.modelType = item.items.$ref ? utils_1.refClassName(item.items.$ref) + '[]' : utils_1.toBaseType(item.items.type) + '[]';
    }
    // 基本类型
    else {
        param.modelType = utils_1.toBaseType(item.type);
    }
    return param;
}
function groupPathsToServices(paths) {
    let services = {};
    paths.forEach(path => {
        if (services[path.tag] == null) {
            services[path.tag] = { name: path.tag, paths: [], importTypes: [] };
        }
        services[path.tag].paths.push(path);
        const type = path.responseType.replace('[]', '');
        if (services[path.tag].importTypes.indexOf(type) < 0) {
            services[path.tag].importTypes.push(type);
        }
        path.bodyParams.forEach(p => {
            const type = p.modelType.replace('[]', '');
            if (services[path.tag].importTypes.indexOf(type) < 0) {
                services[path.tag].importTypes.push(type);
            }
        });
    });
    return Object.values(services);
}
exports.groupPathsToServices = groupPathsToServices;
function normalizeV2Document(document) {
    let normalizeDocument = {
        schema: document.schemes[0],
        version: document.swagger,
        host: document.host,
        definitions: [],
        services: []
    };
    // 解析paths的信息。
    const paths = [];
    Object.entries(document.paths).forEach(([path, pathItem]) => {
        Object.entries(pathItem).forEach(([method, methodItem]) => {
            var _a;
            if (baseMethods.indexOf(method) >= 0 && methodItem != null) {
                const operationObject = methodItem;
                let pathData = {
                    path: path,
                    operationId: camelcase_1.default(operationObject.operationId),
                    method: method,
                    tag: operationObject.tags[0],
                    responseType: getResponseType(operationObject.responses).responseType,
                    pathParams: [],
                    queryParams: [],
                    bodyParams: []
                };
                (_a = operationObject.parameters) === null || _a === void 0 ? void 0 : _a.forEach(p => {
                    if (p != null) {
                        const param = normalizeV2Parameter(p);
                        if (param.in === "query") {
                            pathData.queryParams.push(param);
                        }
                        else if (param.in === "body") {
                            pathData.bodyParams.push(param);
                        }
                        else if (param.in === "path") {
                            pathData.pathParams.push(param);
                        }
                    }
                });
                paths.push(pathData);
            }
        });
    });
    normalizeDocument.services = groupPathsToServices(paths);
    // 解析definitions的信息
    Object.entries(document.definitions).forEach(([modelType, modelInfo]) => {
        let definition = {
            name: modelType,
            type: modelInfo.type,
            properties: [],
        };
        Object.entries(modelInfo.properties).forEach(([propertyKey, propertyInfo]) => {
            definition.properties.push(normalizeV2Property(propertyKey, propertyInfo));
        });
        normalizeDocument.definitions.push(definition);
    });
    return normalizeDocument;
}
exports.normalizeV2Document = normalizeV2Document;
function getResponseType(responses, isV3 = false) {
    // It does not allow the schema defined directly, but only the primitive type is allowed.
    let result = 'any';
    let isRef = false;
    // 提取Schema
    const successStatusCode = Object.keys(responses).find(statusCode => statusCode.match(/20[0-4]$/));
    if (!successStatusCode) {
        return { responseType: result, isRef };
    }
    let resSchema = null;
    if (responses[successStatusCode]) {
        if (isV3 === true) {
            if (responses[successStatusCode].content &&
                responses[successStatusCode].content['application/json'] &&
                responses[successStatusCode].content['application/json'].schema)
                resSchema = responses[successStatusCode].content['application/json'].schema;
        }
        else {
            if (responses[successStatusCode].schema)
                resSchema = responses[successStatusCode].schema;
        }
    }
    if (!resSchema) {
        return { responseType: result, isRef };
    }
    let checkType = resSchema.type;
    let format = resSchema.format;
    // 如果是数组
    if (checkType === 'array' || resSchema.items) {
        if (resSchema.items.$ref) {
            const refType = utils_1.refClassName(resSchema.items.$ref);
            isRef = true;
            result = refType + '[]';
        }
        else {
            const refType = utils_1.toBaseType(resSchema.items.type, resSchema.items.format);
            result = refType + '[]';
        }
    }
    else if (resSchema.$ref) {
        // 如果是引用对象
        result = utils_1.refClassName(resSchema.$ref) || 'any';
        isRef = true;
    }
    else {
        result = checkType;
        result = utils_1.toBaseType(result, format);
    }
    if (result == 'object') {
        result = 'any';
    }
    else if (result == 'array') {
        result = 'any[]';
    }
    return { responseType: result, isRef };
}
exports.getResponseType = getResponseType;
// export function normalizeV3Document(document: OpenAPIV3.Document): IDocument {
//   let normalizeDocument: IDocument = {
//     schema: document.openapi,
//     version: document.swagger,
//     host: document.host,
//     definitions: [],
//     paths: []
//   }
//   return normalizeDocument;
// }
//# sourceMappingURL=parser.js.map