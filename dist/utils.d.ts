import { IDefinitionClass, IDefinitionEnum } from './baseInterfaces';
export declare const isOpenApiGenerics: (s: string) => boolean;
export declare const isGenerics: (s: string) => boolean;
export declare const isDefinedGenericTypes: (x: string) => boolean;
export declare function setDefinedGenericTypes(types?: string[]): void;
export declare const getDefinedGenericTypes: () => string[];
/**
 * 分解泛型接口
 * @param definitionClassName
 */
export declare function getGenericsClassNames(definitionClassName: string): string;
/**
 * 获取引用类型
 * @param s
 */
export declare function refClassName(s: string): string;
/** 移除特殊字符 */
export declare function RemoveSpecialCharacters(str: string): string;
export declare function isBaseType(s: string): boolean;
export declare function toBaseType(s: string, format?: string): string;
export declare function getMethodName(path: string): string;
export declare function trimString(str: string, char: string, type: string): string;
/**
 * 泛型类名提取数组
 * A<B<C>> => [A,B,C]
 **/
export declare function genericsToClassNames(modelName: string): string[];
/**
 *  数组类名转泛型类名
 *  [A,B,C] => A<B<C>>
 */
export declare function classNamesToGenerics(classNames: string[]): string;
export declare function findDeepRefs(imports: string[], allDefinition: IDefinitionClass[], allEnums: IDefinitionEnum[], currentImports?: string[]): string[];
export declare function isOpenApi3(version: string): boolean;
