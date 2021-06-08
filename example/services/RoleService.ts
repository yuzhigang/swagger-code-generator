import request from '@/utils/request'
import {
  IdentityRoleDtoListResultDto,
  IdentityRoleDtoPagedResultDto,
  IdentityRoleDto,
  IdentityRoleCreateDto,
  IdentityRoleUpdateDto
} from './definitions'

export default class RoleService {
  static async getAllList() {
    const url = '/api/identity/roles/all'
    return request<IdentityRoleDtoListResultDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: { filter?: string; sorting?: string; skipCount?: number; maxResultCount?: number }) {
    const url = '/api/identity/roles'
    return request<IdentityRoleDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async create(body: IdentityRoleCreateDto) {
    const url = '/api/identity/roles'
    return request<IdentityRoleDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async get(id: string) {
    const url = `/api/identity/roles/${id}`
    return request<IdentityRoleDto>(url, {
      method: 'get'
    })
  }

  static async update(id: string, body: IdentityRoleUpdateDto) {
    const url = `/api/identity/roles/${id}`
    return request<IdentityRoleDto>(url, {
      method: 'put',
      data: body
    })
  }

  static async delete(id: string) {
    const url = `/api/identity/roles/${id}`
    return request(url, {
      method: 'delete'
    })
  }
}
