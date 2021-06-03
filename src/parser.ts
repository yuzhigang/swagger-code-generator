import { OpenAPI, OpenAPIV2, OpenAPIV3 } from "openapi-types";
import { IDocument, IPath, IParameter, IDefinition, IProperty, IService } from "./swaggerInterfaces";
import { refClassName, toBaseType, RemoveSpecialCharacters } from './utils'
import camelcase from 'camelcase'

const baseMethods = ["post", "get", "delete", "put"]

function normalizeV2Property(name: string, item: OpenAPIV2.SchemaObject) {
  const property: IProperty = {
    name: name,
    modelType: 'object',
    description: item.description
  }
  if (item.type === 'array') {
    if (item.items.$ref) {
      property.modelType = refClassName(item.items.$ref) + '[]'
    } else {
      property.modelType = toBaseType(item.items.type) + '[]'
    }
  } else {
    property.modelType = toBaseType(item.type as string)
  }
  return property
}

function normalizeV2ReferenceObject(item: OpenAPIV2.ReferenceObject) {
}

function normalizeV2Parameter(item: OpenAPIV2.Parameter) {
  const param: IParameter = {
    name: item.name.split('.').pop(),
    in: item.in,
    // type: item.type,
    description: item.description,
    required: item.required,
  }
  if (item.schema) {
    if (item.schema.items) {
      if (item.schema.items.$ref) {
        param.modelType = refClassName(item.schema.items.$ref)
      } else {
        param.modelType = toBaseType(item.schema.items.type)
      }
      if (item.schema.type && item.schema.type === 'array') {
        param.modelType += '[]'
      }
    } else if (item.schema.$ref) {
      param.modelType = refClassName(item.schema.$ref)
      // console.log('param.modelType', refClassName(item.schema.$ref))
    } else if (item.schema.type) {
      param.modelType = toBaseType(item.schema.type)
    } else {
      throw new Error('Could not find property type on schema')
    }
  } else if (item.items) {
    param.modelType = item.items.$ref ? refClassName(item.items.$ref) + '[]' : toBaseType(item.items.type) + '[]'
  }
  // 基本类型
  else {
    param.modelType = toBaseType(item.type)
  }
  return param;
}

export function groupPathsToServices(paths: IPath[]): IService[] {
  let services: Record<string, IService> = {}
  paths.forEach(path => {
    if (services[path.tag] == null) {
      services[path.tag] = { name: path.tag, paths: [], importTypes: [] }
    }
    services[path.tag].paths.push(path)
    const type = path.responseType.replace('[]', '')
    if (services[path.tag].importTypes.indexOf(type) < 0) {
      services[path.tag].importTypes.push(type)
    }
    path.bodyParams.forEach(p => {
      const type = p.modelType.replace('[]', '')
      if (services[path.tag].importTypes.indexOf(type) < 0) {
        services[path.tag].importTypes.push(type)
      }
    })
  })
  return Object.values(services);
}

export function normalizeV2Document(document: OpenAPIV2.Document): IDocument {
  let normalizeDocument: IDocument = {
    schema: document.schemes[0],
    version: document.swagger,
    host: document.host,
    definitions: [],
    services: []
  }

  // 解析paths的信息。
  const paths: IPath[] = []
  Object.entries<OpenAPIV2.PathItemObject>(document.paths).forEach(([path, pathItem]) => {
    Object.entries(pathItem).forEach(([method, methodItem]) => {
      if (baseMethods.indexOf(method) >= 0 && methodItem as OpenAPIV2.OperationObject != null) {
        const operationObject = methodItem as OpenAPIV2.OperationObject
        let pathData: IPath = {
          path: path,
          operationId: camelcase(operationObject.operationId),
          method: method,
          tag: operationObject.tags[0],
          responseType: getResponseType(operationObject.responses).responseType,
          pathParams: [],
          queryParams: [],
          bodyParams: []
        }
        operationObject.parameters?.forEach(p => {
          if (p as OpenAPIV2.Parameter != null) {
            const param = normalizeV2Parameter(p as OpenAPIV2.Parameter);
            if (param.in === "query") {
              pathData.queryParams.push(param)
            } else if (param.in === "body") {
              pathData.bodyParams.push(param)
            } else if (param.in === "path") {
              pathData.pathParams.push(param)
            }
          }
        });
        paths.push(pathData)
      }
    });
  });
  normalizeDocument.services = groupPathsToServices(paths)

  // 解析definitions的信息
  Object.entries<OpenAPIV2.SchemaObject>(document.definitions).forEach(([modelType, modelInfo]) => {
    let definition: IDefinition = {
      name: modelType,
      type: modelInfo.type as string,
      properties: [],
    }
    Object.entries<OpenAPIV2.SchemaObject>(modelInfo.properties).forEach(([propertyKey, propertyInfo]) => {
      definition.properties.push(normalizeV2Property(propertyKey, propertyInfo))
    })
    normalizeDocument.definitions.push(definition)
  })
  return normalizeDocument;
}


export function getResponseType(responses: OpenAPIV2.ResponsesObject, isV3: boolean = false): { responseType: string, isRef: boolean } {
  // It does not allow the schema defined directly, but only the primitive type is allowed.
  let result: string = 'any'
  let isRef = false
  // 提取Schema
  const successStatusCode = Object.keys(responses).find(statusCode => statusCode.match(/20[0-4]$/))
  if (!successStatusCode) {
    return { responseType: result, isRef }
  }
  let resSchema = null
  if (responses[successStatusCode]) {
    if (isV3 === true) {
      if (
        responses[successStatusCode].content &&
        responses[successStatusCode].content['application/json'] &&
        responses[successStatusCode].content['application/json'].schema
      )
        resSchema = responses[successStatusCode].content['application/json'].schema
    } else {
      if (responses[successStatusCode].schema) resSchema = responses[successStatusCode].schema
    }
  }
  if (!resSchema) {
    return { responseType: result, isRef }
  }

  let checkType = resSchema.type
  let format = resSchema.format
  // 如果是数组
  if (checkType === 'array' || resSchema.items) {
    if (resSchema.items.$ref) {
      const refType = refClassName(resSchema.items.$ref)
      isRef = true
      result = refType + '[]'
    } else {
      const refType = toBaseType(resSchema.items.type, resSchema.items.format)
      result = refType + '[]'
    }
  } else if (resSchema.$ref) {
    // 如果是引用对象
    result = refClassName(resSchema.$ref) || 'any'
    isRef = true
  } else {
    result = checkType
    result = toBaseType(result, format)
  }

  if (result == 'object') {
    result = 'any'
  } else if (result == 'array') {
    result = 'any[]'
  }
  return { responseType: result, isRef }
}

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