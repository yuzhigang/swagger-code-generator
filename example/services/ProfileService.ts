import request from '@/utils/request'
import type { ProfileDto, UpdateProfileDto, ChangePasswordInput } from './definitions'

export default class ProfileService {
  static async get() {
    const url = '/api/identity/my-profile'
    return request<ProfileDto>(url, {
      method: 'get'
    })
  }

  static async update(input: UpdateProfileDto) {
    const url = '/api/identity/my-profile'
    return request<ProfileDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async changePassword(input: ChangePasswordInput) {
    const url = '/api/identity/my-profile/change-password'
    return request(url, {
      method: 'post',
      data: input
    })
  }
}
