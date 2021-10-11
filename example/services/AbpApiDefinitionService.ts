import request from '@/utils/request'
import type { ApplicationApiDescriptionModel } from './definitions'

export interface GetQueryDto {
  includeTypes?: boolean
}
export default class AbpApiDefinitionService {
  static async get(query: GetQueryDto) {
    const url = '/api/abp/api-definition'
    return request<ApplicationApiDescriptionModel>(url, {
      method: 'get',
      params: query
    })
  }
}
