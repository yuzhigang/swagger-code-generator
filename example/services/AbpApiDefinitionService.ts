import request from '@/utils/request'
import { ApplicationApiDescriptionModel } from './definitions'

export default class AbpApiDefinitionService {
  static async get(query: { includeTypes?: boolean }) {
    const url = '/api/abp/api-definition'
    return request<ApplicationApiDescriptionModel>(url, {
      method: 'get',
      params: query
    })
  }
}
