import { OpenAPI, OpenAPIV2, OpenAPIV3 } from 'openapi-types'
import { IDocument, IPath, IParameter, IDefinition, IProperty, IService } from './swaggerInterfaces'
import { refClassName, toBaseType, RemoveSpecialCharacters } from './utils'
import camelcase from 'camelcase'

const baseMethods = ['post', 'get', 'delete', 'put']

//     "policies": {
//       "type": "object",
//       "additionalProperties": {
//         "type": "boolean"
//       }
//     }

// "kind": {
//   "format": "int32",
//   "description": "描述是否是天车（行车）或台车。",
//   "enum": [
//     0,
//     1
//   ],
//   "type": "integer"
// },

// "material": {
//   "$ref": "#/definitions/AuxMaterialDto"
// },
function normalizeV2Property(name: string, item: OpenAPIV2.SchemaObject, required: string[]) {
  const property: IProperty = {
    name: name,
    modelType: 'object',
    nullable: required.indexOf(name) < 0,
    description: item.description,
  }
  if (item.type === 'array') {
    if (item.items.$ref) {
      property.modelType = refClassName(item.items.$ref) + '[]'
    } else {
      property.modelType = toBaseType(item.items.type) + '[]'
    }
  } else if (item.type === 'object') {
    property.modelType = 'any'
  } else if (item.$ref) {
    property.modelType = refClassName(item.$ref)
  } else if (item.enum) {
    property.modelType = normalizeV2EnumProperty(item)
  } else {
    property.modelType = toBaseType(item.type as string)
  }
  return property
}
// SampleKind": {
//   "format": "int32",
//   "enum": [
//     0,
//     1,
//     2
//   ],
//   "type": "integer"
// }
function normalizeV2EnumProperty(item: OpenAPIV2.SchemaObject) {
  if (item.type === 'string') {
    return item.enum!.map((t: any) => `'${t}'`).join(' | ')
  } else return item.enum!.join(' | ')
}

function normalizeV2ReferenceObject(item: OpenAPIV2.ReferenceObject) {}

//
function normalizeV2Parameter(item: OpenAPIV2.Parameter) {
  const param: IParameter = {
    name: camelcase(item.name.split('.').pop()),
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
  } else if (item.enum) {
    if (item.type === 'string') {
      param.modelType = item.enum!.map((t: any) => `'${t}'`).join(' | ')
    } else {
      param.modelType = item.enum!.join(' | ')
    }
  }
  // 基本类型
  else {
    param.modelType = toBaseType(item.type)
  }
  return param
}

export function groupPathsToServices(paths: IPath[]): IService[] {
  let services: Record<string, IService> = {}
  paths.forEach(path => {
    if (services[path.tag] == null) {
      services[path.tag] = { name: path.tag, paths: [], importTypes: [] }
    }
    services[path.tag].paths.push(path)
    if (path.responseType) {
      const type = path.responseType.replace('[]', '')
      if (services[path.tag].importTypes.indexOf(type) < 0) {
        services[path.tag].importTypes.push(type)
      }
    }
    path.bodyParams.forEach(p => {
      const type = p.modelType.replace('[]', '')
      if (services[path.tag].importTypes.indexOf(type) < 0) {
        services[path.tag].importTypes.push(type)
      }
    })
  })
  return Object.values(services)
}

/**
 * 统一文档的结构。
 * @param document
 * @returns
 */
export function normalizeV2Document(document: OpenAPIV2.Document): IDocument {
  const normalizeDocument: IDocument = {
    schema: document.schemes[0] || 'https',
    version: document.swagger,
    host: document.host,
    definitions: [],
    services: [],
  }

  // 解析paths的信息。
  const paths: IPath[] = []
  Object.entries<OpenAPIV2.PathItemObject>(document.paths).forEach(([path, pathItem]) => {
    Object.entries(pathItem).forEach(([method, methodItem]) => {
      if (baseMethods.indexOf(method) >= 0 && (methodItem as OpenAPIV2.OperationObject) != null) {
        const operationObject = methodItem as OpenAPIV2.OperationObject
        // operationId即为控制器中Action的方法名
        let pathData: IPath = {
          path: path,
          operationId: camelcase(operationObject.operationId),
          method: method,
          tag: operationObject.tags[0],
          responseType: getResponseType(operationObject.responses).responseType,
          pathParams: [],
          queryParams: [],
          bodyParams: [],
        }
        operationObject.parameters?.forEach(p => {
          if ((p as OpenAPIV2.Parameter) != null) {
            const param = normalizeV2Parameter(p as OpenAPIV2.Parameter)
            if (param.in === 'query') {
              pathData.queryParams.push(param)
            } else if (param.in === 'body') {
              pathData.bodyParams.push(param)
            } else if (param.in === 'path') {
              pathData.pathParams.push(param)
            }
          }
        })
        paths.push(pathData)
      }
    })
  })
  normalizeDocument.services = groupPathsToServices(paths)

  // 解析definitions的信息
  Object.entries<OpenAPIV2.SchemaObject>(document.definitions).forEach(([modelType, modelInfo]) => {
    let definition: IDefinition = {
      name: modelType, // SampleKind
      type: modelInfo.type as string, // integer|string
      properties: [],
      values: [], // 1,2,3
    }

    // 不设置为：options.UseInlineDefinitionsForEnums(); enum会是一个单独的enum
    // enum类型没有properties属性
    // SampleKind": {
    //   "format": "int32",
    //   "enum": [
    //     0,
    //     1,
    //     2
    //   ],
    //   "type": "integer"
    // }

    // "ApplicationAuthConfigurationDto": {
    //   "type": "object",
    //   "properties": {
    //     "policies": {
    //       "type": "object",
    //       "additionalProperties": {
    //         "type": "boolean"
    //       }
    //     },
    //     "grantedPolicies": {
    //       "type": "object",
    //       "additionalProperties": {
    //         "type": "boolean"
    //       },
    // 当设置   options.UseInlineDefinitionsForEnums(); 后，所有的menu类型，不再有schema，而是一个普通类型，增加了 enum字段。
    // "kind": {
    //   "format": "int32",
    //   "description": "描述是否是天车（行车）或台车。",
    //   "enum": [
    //     0,
    //     1
    //   ],
    //   "type": "integer"
    // },
    //     }
    //   }
    // },
    if (modelInfo.properties) {
      Object.entries<OpenAPIV2.SchemaObject>(modelInfo.properties).forEach(([propertyKey, propertyInfo]) => {
        definition.properties.push(normalizeV2Property(propertyKey, propertyInfo, modelInfo.required || []))
      })
    } else if (modelInfo.enum) {
      // SampleKind": {
      //   "format": "int32",
      //   "enum": [
      //     0,
      //     1,
      //     2
      //   ],
      //   "type": "integer"
      // }
      modelInfo.enum.forEach(v => {
        definition.values.push(v)
      })
    }
    normalizeDocument.definitions.push(definition)
  })
  return normalizeDocument
}

// "200": {
//   "description": "Success",
//   "schema": {
//     "$ref": "#/definitions/AbpLoginResult"
//   }
// },
// "403": {
//   "description": "Forbidden",
//   "schema": {
//     "$ref": "#/definitions/RemoteServiceErrorResponse"
//   }
// }
export function getResponseType(
  responses: OpenAPIV2.ResponsesObject,
  isV3: boolean = false
): { responseType: string; isRef: boolean } {
  // It does not allow the schema defined directly, but only the primitive type is allowed.
  let responseType: string | null = null
  let isRef = false
  // 提取Schema
  const successStatusCode = Object.keys(responses).find(statusCode => statusCode.match(/20[0-4]$/))
  if (!successStatusCode) {
    const errorStatusCode = Object.keys(responses).find(statusCode => !statusCode.match(/20[0-4]$/))
    return { responseType: responseType, isRef }
  }
  let resSchema = responses[successStatusCode].schema
  if (!resSchema) {
    return { responseType: responseType, isRef }
  }

  // 如果是数组
  if (resSchema.items) {
    if (resSchema.items.$ref) {
      const refType = refClassName(resSchema.items.$ref)
      isRef = true
      responseType = refType + '[]'
    } else {
      const refType = toBaseType(resSchema.items.type, resSchema.items.format)
      responseType = refType + '[]'
    }
  } else if (resSchema.$ref) {
    // 如果是引用对象
    responseType = refClassName(resSchema.$ref) || 'any'
    isRef = true
  } else {
    responseType = toBaseType(resSchema.type, resSchema.format)
  }
  return { responseType: responseType, isRef }
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
