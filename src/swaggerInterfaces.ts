export interface IDocument {
  host: string
  schema: string
  version: string
  services: IService[]
  // securityDefinitions: string
  definitions: IDefinition[]
  // externalDocs: string
}

export interface IService {
  name: string
  importTypes?: string[]
  paths: IPath[]
}

export interface IPath {
  path: string
  method: string
  operationId: string
  tag: string
  responseType: string
  pathParams?: IParameter[]
  queryParams?: IParameter[]
  queryRefs?: string[] // 多个查询参数合并成一个定义type的参数，schema含有ref的parameter
  bodyParams?: IParameter[]
}

export interface IParameter {
  modelType?: string // 如果in是body， 含有schema，则可以指定一个model类型。
  isRef?: boolean // 对于query， 含有schema，则可以指定一个model类型。
  name: string
  // schema?: string | undefined,
  // type: string,
  in: string
  required?: boolean
  description?: string
}

export interface IDefinition {
  name: string
  type: string
  values?: (string | number)[] // 主要给 enum的枚举值使用
  properties?: IProperty[]
}

export interface IProperty {
  name: string
  nullable: boolean
  // $ref: string,
  modelType: string
  // items: { type: string, $ref?: string }, //如果type是数组，就需要知道数组元素的类型定义。
  description?: string
}
