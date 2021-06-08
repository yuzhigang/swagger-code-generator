import request from '@/utils/request'
import { IdentityUserDto, RegisterDto, SendPasswordResetCodeDto, ResetPasswordDto } from './definitions'

export default class AccountService {
  static async register(body: RegisterDto) {
    const url = '/api/account/register'
    return request<IdentityUserDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async sendPasswordResetCode(body: SendPasswordResetCodeDto) {
    const url = '/api/account/send-password-reset-code'
    return request(url, {
      method: 'post',
      data: body
    })
  }

  static async resetPassword(body: ResetPasswordDto) {
    const url = '/api/account/reset-password'
    return request(url, {
      method: 'post',
      data: body
    })
  }
}
