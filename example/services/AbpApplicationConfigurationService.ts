import request from '@/utils/request'
import { ApplicationConfigurationDto } from './definitions'

export default class AbpApplicationConfigurationService {
  static async get() {
    const url = '/api/abp/application-configuration'
    return request<ApplicationConfigurationDto>(url, {
      method: 'get'
    })
  }
}
