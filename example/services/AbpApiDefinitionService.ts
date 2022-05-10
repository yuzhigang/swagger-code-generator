import request from '@/utils/request'
import type { ApplicationApiDescriptionModel } from './definitions'

export interface AbpApiDefinitionGetQuery {
  includeTypes?: boolean
}
export default class AbpApiDefinitionService {
  static async get(query: AbpApiDefinitionGetQuery) {
    const url = '/api/abp/api-definition'
    return request<ApplicationApiDescriptionModel>(url, {
      method: 'get',
      params: query
    })
  }
}
