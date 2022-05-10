import { OpenAPIV2, OpenAPIV3 } from 'openapi-types'
import { IDocument, IPath, IParameter, IDefinition, IProperty, IService } from './swaggerInterfaces'
import { refClassName, toBaseType, RemoveSpecialCharacters, isOpenApi3 } from './utils'
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
      if ('type' in item.items) property.modelType = toBaseType(item.items.type, item.items.format) + '[]'
    }
  } else if (item.type === 'object') {
    property.modelType = '{}'
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
        param.modelType = toBaseType(item.schema.items.type, item.schema.items.format)
      }
      if (item.schema.type && item.schema.type === 'array') {
        param.modelType += '[]'
      }
    } else if (item.schema.$ref) {
      param.modelType = refClassName(item.schema.$ref)
      // console.log('param.modelType', refClassName(item.schema.$ref))
    } else if (item.schema.type) {
      param.modelType = toBaseType(item.schema.type, item.schema.format)
    } else {
      throw new Error('Could not find property type on schema')
    }
  } else if (item.items) {
    param.modelType = item.items.$ref
      ? refClassName(item.items.$ref) + '[]'
      : toBaseType(item.items.type, item.items.format) + '[]'
  } else if (item.enum) {
    if (item.type === 'string') {
      param.modelType = item.enum!.map((t: any) => `'${t}'`).join(' | ')
    } else {
      param.modelType = item.enum!.join(' | ')
    }
  }
  // 基本类型
  else {
    param.modelType = toBaseType(item.type, item.format)
  }
  return param
}

function normalizeV3Parameter(item: OpenAPIV3.ParameterObject) {
  const param: IParameter = {
    name: camelcase(item.name.split('.').pop()),
    in: item.in,
    // type: item.type,
    description: item.description,
    required: item.required,
  }
  if (item.schema) {
    if ('type' in item.schema) {
      const so = item.schema as OpenAPIV3.SchemaObject
      // 是 array 类型
      if ('items' in so) {
        const aso = so as OpenAPIV3.ArraySchemaObject
        if ('$ref' in aso.items) {
          param.modelType = refClassName((aso.items as OpenAPIV3.ReferenceObject).$ref) + '[]'
        } else {
          // 是基本类型
          const nso = aso.items as OpenAPIV3.SchemaObject
          param.modelType = toBaseType(nso.type, nso.format) + '[]'
        }
      } else {
        // 不是 array， 基本类型+ object类型
        const nso = so as OpenAPIV3.NonArraySchemaObject
        if (nso.type === 'object') {
          // 似乎不存在这种类型
        } else {
          // 基本类型
          param.modelType = toBaseType(nso.type, nso.format, nso.enum)
          // if (nso.enum) {
          //   if(nso.type === 'string'){

          //   }
          // } else {
          //   param.modelType = toBaseType(nso.type)
          // }
        }
      }
    } else if ('$ref' in item.schema) {
      const ro = item.schema as OpenAPIV3.ReferenceObject
      param.isRef = true
      param.modelType = refClassName(ro.$ref)
    }
    return param
  }
}

/**
 * 将多个不同的路径合并到一个服务下。单独成为一个Service文件。
 * @param paths
 * @returns
 */
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

    path.queryRefs.forEach(p => {
      if (p.modelType) {
        const type = p.modelType.replace('[]', '')
        if (services[path.tag].importTypes.indexOf(type) < 0) {
          services[path.tag].importTypes.push(type)
        }
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
    schema: document.schemes?.[0] || 'https',
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
          responseType: getResponseTypeV2(operationObject.responses).responseType,
          pathParams: [],
          queryParams: [],
          bodyParams: [],
        }
        operationObject.parameters?.forEach(p => {
          if ('in' in p) {
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
export function getResponseTypeV2(
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
  let resSchema = (responses?.[successStatusCode] as OpenAPIV2.ResponseObject).schema

  // if (successStatusCode in responses && responses[successStatusCode] && 'schema' in responses[successStatusCode]) {
  //   let resSchema = responses[successStatusCode].schema
  // }

  if (!resSchema) {
    return { responseType: responseType, isRef }
  }

  // 如果是数组
  if ('items' in resSchema) {
    if (resSchema.items.$ref) {
      const refType = refClassName(resSchema.items.$ref)
      isRef = true
      responseType = refType + '[]'
    } else {
      if ('type' in resSchema.items) {
        const refType = toBaseType(resSchema.items.type, resSchema.items.format)
        responseType = refType + '[]'
      }
    }
  } else if (resSchema.$ref) {
    // 如果是引用对象
    responseType = refClassName(resSchema.$ref) || 'any'
    isRef = true
  } else {
    if ('type' in resSchema) {
      responseType = toBaseType(resSchema.type as string, resSchema.format)
    }
  }
  return { responseType: responseType, isRef }
}

export function getResponseTypeV3(responses: OpenAPIV3.ResponsesObject): {
  responseType: string
  errorResponseType?: string
  isRef: boolean
} {
  // It does not allow the schema defined directly, but only the primitive type is allowed.
  let responseType: string | null = null
  let errorResponseType: string | null = null
  let isRef = false

  const errorStatusCode = Object.keys(responses).find(statusCode => !statusCode.match(/20[0-4]$/))
  const errorRefObject = responses[errorStatusCode]
  if (errorRefObject && '$ref' in errorRefObject) {
    const ero = errorRefObject as OpenAPIV3.ReferenceObject
    errorResponseType = refClassName(ero.$ref)
  }
  // 提取Schema
  const successStatusCode = Object.keys(responses).find(statusCode => statusCode.match(/20[0-4]$/))
  if (!successStatusCode) {
    return { responseType, errorResponseType, isRef }
  }

  let resSchema = responses[successStatusCode]
  if ('$ref' in resSchema) {
    const ro = resSchema as OpenAPIV3.ReferenceObject
    return { responseType: refClassName(ro.$ref), isRef: true, errorResponseType }
  }

  if (resSchema.content) {
    if ('application/json' in resSchema.content) {
      const mto = resSchema.content['application/json'] as OpenAPIV3.MediaTypeObject
      if ('$ref' in mto.schema) {
        const refType = refClassName(mto.schema.$ref)
        return { responseType: refType, isRef: true, errorResponseType }
      } else {
        const so = mto.schema as OpenAPIV3.SchemaObject
        if ('items' in so) {
          if ('$ref' in so.items) {
            const refType = refClassName(so.items.$ref) + '[]'
            return { responseType: refType, isRef: true, errorResponseType }
          }
        }
      }
    }
  }
  return { responseType: responseType, isRef, errorResponseType }
}

export function normalizeV3Document(document: OpenAPIV3.Document): IDocument {
  let normalizeDocument: IDocument = {
    schema: document.openapi,
    version: document.openapi,
    host: document.servers?.[0]?.url,
    definitions: [],
    services: [],
  }

  // 解析paths的信息。
  const paths: IPath[] = []
  Object.entries<OpenAPIV3.PathItemObject>(document.paths).forEach(([path, pathItem]) => {
    Object.entries(pathItem).forEach(([method, methodItem]) => {
      if (baseMethods.indexOf(method) >= 0 && (methodItem as OpenAPIV3.OperationObject) != null) {
        const operationObject = methodItem as OpenAPIV3.OperationObject
        // operationId即为控制器中Action的方法名
        let pathData: IPath = {
          path: path,
          operationId: camelcase(operationObject.operationId),
          method: method,
          tag: operationObject.tags[0],
          responseType: getResponseTypeV3(operationObject.responses).responseType,
          pathParams: [],
          queryParams: [],
          queryRefs: [],
          bodyParams: [],
        }
        operationObject.parameters?.forEach(p => {
          if ('in' in p) {
            const param = normalizeV3Parameter(p as OpenAPIV3.ParameterObject)
            if (param.in === 'query') {
              if (param.isRef) {
                pathData.queryRefs.push(param)
              } else {
                pathData.queryParams.push(param)
              }
            } else if (param.in === 'body') {
              pathData.bodyParams.push(param)
            } else if (param.in === 'path') {
              pathData.pathParams.push(param)
            }
          }
        })
        if (operationObject.requestBody) {
          // 以下封装 bodyParams
          if ('$ref' in operationObject.requestBody) {
            pathData.bodyParams.push({
              name: 'input',
              in: 'body',
              modelType: refClassName(operationObject.requestBody.$ref),
            })
          } else {
            const resSchema = operationObject.requestBody
            if (resSchema.content) {
              if ('application/json' in resSchema.content) {
                const mto = resSchema.content['application/json'] as OpenAPIV3.MediaTypeObject
                if ('$ref' in mto.schema) {
                  const refType = refClassName(mto.schema.$ref)
                  pathData.bodyParams.push({
                    name: 'input',
                    in: 'body',
                    modelType: refType,
                    isRef: true,
                  })
                } else {
                  const so = mto.schema as OpenAPIV3.SchemaObject
                  if ('items' in so) {
                    if ('$ref' in so.items) {
                      const refType = refClassName(so.items.$ref) + '[]'
                      pathData.bodyParams.push({
                        name: 'input',
                        in: 'body',
                        modelType: refType,
                        isRef: true,
                      })
                    }
                  }
                }
              }
            }
          }
        }
        paths.push(pathData)
      }
    })
  })
  normalizeDocument.services = groupPathsToServices(paths)

  Object.entries<OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject>(document.components.schemas).forEach(
    ([modelType, modelInfo]) => {
      let definition: IDefinition = {
        name: modelType, // SampleKind
        // type: modelInfo.type as string, // integer|string
        type: '',
        properties: [],
        values: [], // 1,2,3
      }
      if ('type' in modelInfo) {
        const so = modelInfo as OpenAPIV3.SchemaObject
        definition.type = so.type // 可能为 array，或者 object
        if (so.properties) {
          Object.entries<OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject>(so.properties).forEach(
            ([propertyKey, propertyInfo]) => {
              definition.properties.push(normalizeV3Property(propertyKey, propertyInfo, so.required || []))
            }
          )
        } else if (so.enum) {
          // 枚举类型
          definition.values = so.enum
        }
      } else {
        // const ro = modelInfo as OpenAPIV3.ReferenceObject
        definition.type = 'object'
        definition.properties.push({
          name: modelType,
          modelType: 'object',
          nullable: false,
        })
      }
      normalizeDocument.definitions.push(definition)
    }
  )

  return normalizeDocument
}

function normalizeV3Property(
  name: string,
  item: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
  required: string[]
) {
  const property: IProperty = {
    name: name,
    modelType: 'object',
    nullable: required.indexOf(name) < 0,
    // description: item.description,
  }
  if ('type' in item) {
    const so = item as OpenAPIV3.SchemaObject
    if ('items' in so) {
      const aso = so as OpenAPIV3.ArraySchemaObject
      if ('type' in aso.items) {
        const asoi = aso.items as OpenAPIV3.NonArraySchemaObject
        property.modelType = toBaseType(asoi.type, asoi.format) + '[]'
      } else if ('$ref' in aso.items) {
        property.modelType = refClassName((aso.items as OpenAPIV3.ReferenceObject).$ref) + '[]'
      }
    } else {
      // NonArraySchemaObject
      const nso = so as OpenAPIV3.NonArraySchemaObject
      property.modelType = toBaseType(nso.type, nso.format, nso.enum)
    }
  } else {
    const ro = item as OpenAPIV3.ReferenceObject
    property.modelType = refClassName(ro.$ref)
  }

  // TODO: 加还是不加？ properties: 下的nullable
  // if ('nullable' in item) {
  //   property.nullable = item.nullable
  // }
  return property
}
