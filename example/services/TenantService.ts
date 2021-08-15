import request from '@/utils/request'
import { TenantDto, TenantUpdateDto, TenantDtoPagedResultDto, TenantCreateDto } from './definitions'

export default class TenantService {
  static async get(id: string) {
    const url = `/api/multi-tenancy/tenants/${id}`
    return request<TenantDto>(url, {
      method: 'get'
    })
  }

  static async update(id: string, input: TenantUpdateDto) {
    const url = `/api/multi-tenancy/tenants/${id}`
    return request<TenantDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/multi-tenancy/tenants/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async getList(query: { filter?: string; sorting?: string; skipCount?: number; maxResultCount?: number }) {
    const url = '/api/multi-tenancy/tenants'
    return request<TenantDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async create(input: TenantCreateDto) {
    const url = '/api/multi-tenancy/tenants'
    return request<TenantDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getDefaultConnectionString(id: string) {
    const url = `/api/multi-tenancy/tenants/${id}/default-connection-string`
    return request(url, {
      method: 'get'
    })
  }

  static async updateDefaultConnectionString(id: string, query: { defaultConnectionString?: string }) {
    const url = `/api/multi-tenancy/tenants/${id}/default-connection-string`
    return request(url, {
      method: 'put',
      params: query
    })
  }

  static async deleteDefaultConnectionString(id: string) {
    const url = `/api/multi-tenancy/tenants/${id}/default-connection-string`
    return request(url, {
      method: 'delete'
    })
  }
}
