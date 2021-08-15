import request from '@/utils/request'
import { GetPermissionListResultDto, UpdatePermissionsDto } from './definitions'

export default class PermissionsService {
  static async get(query: { providerName?: string; providerKey?: string }) {
    const url = '/api/permission-management/permissions'
    return request<GetPermissionListResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(query: { providerName?: string; providerKey?: string }, input: UpdatePermissionsDto) {
    const url = '/api/permission-management/permissions'
    return request(url, {
      method: 'put',
      params: query,
      data: input
    })
  }
}
