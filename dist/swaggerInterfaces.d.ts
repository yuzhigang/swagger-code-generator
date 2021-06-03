export interface IDocument {
    host: string;
    schema: string;
    version: string;
    services: IService[];
    definitions: IDefinition[];
}
export interface IService {
    name: string;
    importTypes?: string[];
    paths: IPath[];
}
export interface IPath {
    path: string;
    method: string;
    operationId: string;
    tag: string;
    responseType: string;
    pathParams?: IParameter[];
    queryParams?: IParameter[];
    bodyParams?: IParameter[];
}
export interface IParameter {
    modelType?: string;
    name: string;
    in: string;
    required?: boolean;
    description?: string;
}
export interface IDefinition {
    name: string;
    type: string;
    properties: IProperty[];
}
export interface IProperty {
    name: string;
    modelType: string;
    description?: string;
}
