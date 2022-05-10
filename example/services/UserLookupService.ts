import request from '@/utils/request'
import type { UserData, UserDataListResultDto } from './definitions'

export interface UserLookupSearchQuery {
  filter?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export interface UserLookupGetCountQuery {
  filter?: string
}
export default class UserLookupService {
  static async findById(id: string) {
    const url = `/api/identity/users/lookup/${id}`
    return request<UserData>(url, {
      method: 'get'
    })
  }

  static async findByUserName(userName: string) {
    const url = `/api/identity/users/lookup/by-username/${userName}`
    return request<UserData>(url, {
      method: 'get'
    })
  }

  static async search(query: UserLookupSearchQuery) {
    const url = '/api/identity/users/lookup/search'
    return request<UserDataListResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async getCount(query: UserLookupGetCountQuery) {
    const url = '/api/identity/users/lookup/count'
    return request(url, {
      method: 'get',
      params: query
    })
  }
}
