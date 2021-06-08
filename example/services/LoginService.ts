import request from '@/utils/request'
import { AbpLoginResult, UserLoginInfo } from './definitions'

export default class LoginService {
  static async login(body: UserLoginInfo) {
    const url = '/api/account/login'
    return request<AbpLoginResult>(url, {
      method: 'post',
      data: body
    })
  }

  static async logout() {
    const url = '/api/account/logout'
    return request(url, {
      method: 'get'
    })
  }

  static async checkPassword(body: UserLoginInfo) {
    const url = '/api/account/check-password'
    return request<AbpLoginResult>(url, {
      method: 'post',
      data: body
    })
  }
}
