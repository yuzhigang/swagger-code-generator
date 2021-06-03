"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOpenApi3 = exports.findDeepRefs = exports.classNamesToGenerics = exports.genericsToClassNames = exports.trimString = exports.getMethodName = exports.toBaseType = exports.isBaseType = exports.RemoveSpecialCharacters = exports.refClassName = exports.getGenericsClassNames = exports.getDefinedGenericTypes = exports.setDefinedGenericTypes = exports.isDefinedGenericTypes = exports.isGenerics = exports.isOpenApiGenerics = void 0;
// import { IDefinitionProperty } from './swaggerInterfaces'
let definedGenericTypes = [];
const UniversalGenericTypes = ['IList', 'List'];
const AbpGenericTypes = ['IListResult', 'ListResultDto', 'IPagedResult', 'PagedResultDto', 'Dictionary', 'IDictionary'];
// 是否是接口类型
const isOpenApiGenerics = (s) => /^.+\[.+\]$/.test(s) || /^.+\«.+\»$/.test(s) || /^.+\<.+\>$/.test(s);
exports.isOpenApiGenerics = isOpenApiGenerics;
const isGenerics = (s) => {
    return /^.+\<.+\>$/.test(s);
};
exports.isGenerics = isGenerics;
const isDefinedGenericTypes = (x) => definedGenericTypes.some(i => i === x);
exports.isDefinedGenericTypes = isDefinedGenericTypes;
function setDefinedGenericTypes(types = []) {
    definedGenericTypes.push(...UniversalGenericTypes, ...AbpGenericTypes, ...types);
}
exports.setDefinedGenericTypes = setDefinedGenericTypes;
const getDefinedGenericTypes = () => definedGenericTypes;
exports.getDefinedGenericTypes = getDefinedGenericTypes;
/**
 * 分解泛型接口
 * @param definitionClassName
 */
function getGenericsClassNames(definitionClassName) {
    let str = '';
    let split_key = '';
    if (/^.+\[.+\]$/.test(definitionClassName)) {
        split_key = '[';
    }
    else if (/^.+\«.+\»$/.test(definitionClassName)) {
        split_key = '«';
    }
    else if (/^.+\<.+\>$/.test(definitionClassName)) {
        split_key = '<';
    }
    if (split_key !== '') {
        const splitIndex = definitionClassName.indexOf(split_key);
        // 泛型基类 PagedResultDto
        const interfaceClassName = definitionClassName.slice(0, splitIndex);
        // 泛型类型 T 的类型名称
        const TClassName = definitionClassName.slice(splitIndex + 1, -1);
        if (exports.isDefinedGenericTypes(interfaceClassName)) {
            str = interfaceClassName === 'IDictionary' || interfaceClassName === 'Dictionary'
                ? `${interfaceClassName}<object>`
                : `${interfaceClassName}<${refClassName(TClassName)}>`;
        }
        else {
            str = trimString(RemoveSpecialCharacters(definitionClassName), '_', 'right');
        }
    }
    else {
        // console.log('getGenericsClassNames', definitionClassName)
        str = toBaseType(trimString(RemoveSpecialCharacters(definitionClassName), '_', 'right'));
    }
    return str;
}
exports.getGenericsClassNames = getGenericsClassNames;
/**
 * 获取引用类型
 * @param s
 */
function refClassName(s) {
    let propType = s === null || s === void 0 ? void 0 : s.slice(s.lastIndexOf('/') + 1);
    return exports.isOpenApiGenerics(propType)
        ? getGenericsClassNames(propType)
        : toBaseType(trimString(RemoveSpecialCharacters(propType), '_', 'right'));
}
exports.refClassName = refClassName;
/** 移除特殊字符 */
function RemoveSpecialCharacters(str) {
    return str === null || str === void 0 ? void 0 : str.replace(/[`~!@#$%^&*()_+<>«»?:"{},.\/;'[\]]/g, '_');
}
exports.RemoveSpecialCharacters = RemoveSpecialCharacters;
function isBaseType(s) {
    return ['boolean', 'number', 'string', 'string', 'Date', 'any'].includes(s);
}
exports.isBaseType = isBaseType;
function toBaseType(s, format) {
    if (s === undefined || s === null || s.length === 0) {
        return 'any | null';
    }
    let result = '';
    switch (s) {
        case 'boolean':
        case 'bool':
        case 'Boolean':
            result = 'boolean';
            break;
        case 'array':
            result = '[]';
            break;
        case 'Int64':
        case 'Int32':
        case 'int':
        case 'integer':
        case 'number':
            result = 'number';
            break;
        case 'Guid':
        case 'String':
        case 'string':
        case 'uuid':
            switch (format) {
                case 'date':
                case 'date-time':
                    result = 'Date';
                    break;
                default:
                    result = 'string';
            }
            break;
        case 'file':
            result = 'any';
            break;
        default:
            result = s;
            break;
    }
    return result;
}
exports.toBaseType = toBaseType;
function getMethodName(path) {
    const paths = path.split('/');
    for (let i = paths.length - 1; i >= 0; i--) {
        if (/\{.+\}/.test(paths[i]) === false) {
            return paths[i];
        }
    }
    return '';
}
exports.getMethodName = getMethodName;
function trimString(str, char, type) {
    str = str !== null && str !== void 0 ? str : '';
    if (char) {
        if (type == 'left') {
            return str.replace(new RegExp('^\\' + char + '+', 'g'), '');
        }
        else if (type == 'right') {
            return str.replace(new RegExp('\\' + char + '+$', 'g'), '');
        }
        return str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
    }
    return str.replace(/^\s+|\s+$/g, '');
}
exports.trimString = trimString;
/**
 * 泛型类名提取数组
 * A<B<C>> => [A,B,C]
 **/
function genericsToClassNames(modelName) {
    if (exports.isGenerics(modelName)) {
        const names = modelName.split(/[<>]+/);
        names.pop();
        return names;
    }
    else if (modelName.endsWith('[]'))
        return [modelName.replace('[]', '')];
    else {
        return [modelName];
    }
}
exports.genericsToClassNames = genericsToClassNames;
/**
 *  数组类名转泛型类名
 *  [A,B,C] => A<B<C>>
 */
function classNamesToGenerics(classNames) {
    const len = classNames.length;
    if (len > 1) {
        const end = new Array(len).join('>');
        const name = classNames.join('<') + end;
        return name;
    }
    else if (len === 1) {
        return classNames[1];
    }
}
exports.classNamesToGenerics = classNamesToGenerics;
function findDeepRefs(imports, allDefinition, allEnums, currentImports = []) {
    let result = currentImports !== null && currentImports !== void 0 ? currentImports : [];
    // if (imports.includes('AuthUserStationDto[]')) {
    //   console.log('result init', imports, currentImports);
    // }
    for (const model of imports) {
        const modelNames = genericsToClassNames(model);
        for (const modelName of modelNames) {
            // if (modelNames.includes('AuthUserStationDto[]')) {
            //   console.log('modelNames', modelNames);
            // }
            let ref = null;
            ref = allDefinition.find(item => modelName === item.name);
            if (ref == null)
                ref = allDefinition.find(item => modelName.startsWith(item.name));
            // if (modelNames.includes('AuthUserStationDto[]')) {
            //   console.log('ref', JSON.stringify(ref));
            //   // return []
            // }
            if (ref && !result.includes(ref.name)) {
                // if (ref.value.imports.includes('AuthUserStationDto[]') || ref.value.imports.includes('AuthUserStationDto[]')) {
                //   console.log('findDeepRefs', result);
                //   console.log('AuthUserStationDto', ref.value.imports);
                //   // return []
                // }
                result.push(ref.name);
                if (ref.value.imports.length > 0) {
                    let uniqueImports = [];
                    for (const importItem of ref.value.imports) {
                        if (result.includes(importItem) || uniqueImports.includes(importItem))
                            continue;
                        uniqueImports.push(importItem);
                    }
                    let deepRefs = findDeepRefs(uniqueImports, allDefinition, allEnums, result);
                    // if (ref.value.imports.includes('MotorMonthlyCurrentItem') || ref.value.imports.includes('MotorMonthlyDto')) {
                    //   console.log('uniqueImports', deepRefs);
                    // }
                    if (!!deepRefs) {
                        result = deepRefs;
                    }
                }
            }
            else {
                ref = allEnums.find(item => modelNames.some((modelName) => modelName.startsWith(item.name)));
                if (ref) {
                    result.push(ref.name);
                }
            }
        }
    }
    if (imports.includes('AuthUserStationDto')) {
        console.log('result', result);
    }
    return result;
}
exports.findDeepRefs = findDeepRefs;
// export function findDeepRefs(imports: string[], allDefinition: IDefinitionClass[], allEnums: IDefinitionEnum[]) {
//   let result: string[] = []
//   imports.forEach(model => {
//     const modelNames = getClassNamesFromModel(model)
//     let modelName = model
//     let ref = null
//     ref = allDefinition.find(item => modelName.startsWith(item.name))
//     if (ref) {
//       result.push(ref.name)
//       if (ref.value.imports.length > 0) {
//         result = result.concat(findDeepRefs(ref.value.imports, allDefinition, allEnums))
//       }
//     } else {
//       ref = allEnums.find(item => modelName.startsWith(item.name))
//       if (ref) {
//         result.push(ref.name)
//       }
//     }
//   })
//   return result
// }
function isOpenApi3(version) {
    console.log('openApi version：', version);
    return version.startsWith('3.', 0);
}
exports.isOpenApi3 = isOpenApi3;
// export function getValidationModel(propName: string, prop: IDefinitionProperty, required: string[]) {
//   let validationModel: any = {}
//   let hasValidationRules = false
//   if (required && required.includes(propName)) {
//     validationModel.required = true
//     hasValidationRules = true
//   }
//   if (prop.maxLength) {
//     validationModel.maxLength = prop.maxLength
//     hasValidationRules = true
//   }
//   return hasValidationRules ? validationModel : null
// }
//# sourceMappingURL=utils.js.map