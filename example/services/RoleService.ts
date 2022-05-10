import request from '@/utils/request'
import type {
  IdentityRoleDtoListResultDto,
  IdentityRoleDtoPagedResultDto,
  IdentityRoleDto,
  IdentityRoleCreateDto,
  IdentityRoleUpdateDto
} from './definitions'

export interface RoleGetListQuery {
  filter?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class RoleService {
  static async getAllList() {
    const url = '/api/identity/roles/all'
    return request<IdentityRoleDtoListResultDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: RoleGetListQuery) {
    const url = '/api/identity/roles'
    return request<IdentityRoleDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async create(input: IdentityRoleCreateDto) {
    const url = '/api/identity/roles'
    return request<IdentityRoleDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async get(id: string) {
    const url = `/api/identity/roles/${id}`
    return request<IdentityRoleDto>(url, {
      method: 'get'
    })
  }

  static async update(id: string, input: IdentityRoleUpdateDto) {
    const url = `/api/identity/roles/${id}`
    return request<IdentityRoleDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/identity/roles/${id}`
    return request(url, {
      method: 'delete'
    })
  }
}
