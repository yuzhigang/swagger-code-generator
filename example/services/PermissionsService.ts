import request from '@/utils/request'
import type { GetPermissionListResultDto, UpdatePermissionsDto } from './definitions'

export interface GetQueryDto {
  providerName?: string
  providerKey?: string
}
export interface UpdateQueryDto {
  providerName?: string
  providerKey?: string
}
export default class PermissionsService {
  static async get(query: GetQueryDto) {
    const url = '/api/permission-management/permissions'
    return request<GetPermissionListResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(query: UpdateQueryDto, input: UpdatePermissionsDto) {
    const url = '/api/permission-management/permissions'
    return request(url, {
      method: 'put',
      params: query,
      data: input
    })
  }
}
