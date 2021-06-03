import { OpenAPIV2 } from "openapi-types";
import { IDocument, IPath, IService } from "./swaggerInterfaces";
export declare function groupPathsToServices(paths: IPath[]): IService[];
export declare function normalizeV2Document(document: OpenAPIV2.Document): IDocument;
export declare function getResponseType(responses: OpenAPIV2.ResponsesObject, isV3?: boolean): {
    responseType: string;
    isRef: boolean;
};
