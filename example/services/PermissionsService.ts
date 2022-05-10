import request from '@/utils/request'
import type { GetPermissionListResultDto, UpdatePermissionsDto } from './definitions'

export interface PermissionsGetQuery {
  providerName?: string
  providerKey?: string
}
export interface PermissionsUpdateQuery {
  providerName?: string
  providerKey?: string
}
export default class PermissionsService {
  static async get(query: PermissionsGetQuery) {
    const url = '/api/permission-management/permissions'
    return request<GetPermissionListResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(query: PermissionsUpdateQuery, input: UpdatePermissionsDto) {
    const url = '/api/permission-management/permissions'
    return request(url, {
      method: 'put',
      params: query,
      data: input
    })
  }
}
