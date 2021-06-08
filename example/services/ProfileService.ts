import request from '@/utils/request'
import { ProfileDto, UpdateProfileDto, ChangePasswordInput } from './definitions'

export default class ProfileService {
  static async get() {
    const url = '/api/identity/my-profile'
    return request<ProfileDto>(url, {
      method: 'get'
    })
  }

  static async update(body: UpdateProfileDto) {
    const url = '/api/identity/my-profile'
    return request<ProfileDto>(url, {
      method: 'put',
      data: body
    })
  }

  static async changePassword(body: ChangePasswordInput) {
    const url = '/api/identity/my-profile/change-password'
    return request(url, {
      method: 'post',
      data: body
    })
  }
}
