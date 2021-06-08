import request from '@/utils/request'
import { FindTenantResultDto } from './definitions'

export default class AbpTenantService {
  static async findTenantByName(name: string) {
    const url = `/api/abp/multi-tenancy/tenants/by-name/${name}`
    return request<FindTenantResultDto>(url, {
      method: 'get'
    })
  }

  static async findTenantById(id: string) {
    const url = `/api/abp/multi-tenancy/tenants/by-id/${id}`
    return request<FindTenantResultDto>(url, {
      method: 'get'
    })
  }
}
