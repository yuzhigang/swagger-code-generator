import request from '@/utils/request'
import type { AbpLoginResult, UserLoginInfo } from './definitions'

export default class LoginService {
  static async login(input: UserLoginInfo) {
    const url = '/api/account/login'
    return request<AbpLoginResult>(url, {
      method: 'post',
      data: input
    })
  }

  static async logout() {
    const url = '/api/account/logout'
    return request(url, {
      method: 'get'
    })
  }

  static async checkPassword(input: UserLoginInfo) {
    const url = '/api/account/check-password'
    return request<AbpLoginResult>(url, {
      method: 'post',
      data: input
    })
  }
}
