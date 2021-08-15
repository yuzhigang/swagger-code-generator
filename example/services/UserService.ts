import request from '@/utils/request'
import {
  IdentityUserDto,
  IdentityUserUpdateDto,
  IdentityUserDtoPagedResultDto,
  IdentityUserCreateDto,
  IdentityRoleDtoListResultDto,
  IdentityUserUpdateRolesDto
} from './definitions'

export default class UserService {
  static async get(id: string) {
    const url = `/api/identity/users/${id}`
    return request<IdentityUserDto>(url, {
      method: 'get'
    })
  }

  static async update(id: string, input: IdentityUserUpdateDto) {
    const url = `/api/identity/users/${id}`
    return request<IdentityUserDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/identity/users/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async getList(query: { filter?: string; sorting?: string; skipCount?: number; maxResultCount?: number }) {
    const url = '/api/identity/users'
    return request<IdentityUserDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async create(input: IdentityUserCreateDto) {
    const url = '/api/identity/users'
    return request<IdentityUserDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getRoles(id: string) {
    const url = `/api/identity/users/${id}/roles`
    return request<IdentityRoleDtoListResultDto>(url, {
      method: 'get'
    })
  }

  static async updateRoles(id: string, input: IdentityUserUpdateRolesDto) {
    const url = `/api/identity/users/${id}/roles`
    return request(url, {
      method: 'put',
      data: input
    })
  }

  static async getAssignableRoles() {
    const url = '/api/identity/users/assignable-roles'
    return request<IdentityRoleDtoListResultDto>(url, {
      method: 'get'
    })
  }

  static async findByUsername(userName: string) {
    const url = `/api/identity/users/by-username/${userName}`
    return request<IdentityUserDto>(url, {
      method: 'get'
    })
  }

  static async findByEmail(email: string) {
    const url = `/api/identity/users/by-email/${email}`
    return request<IdentityUserDto>(url, {
      method: 'get'
    })
  }
}
