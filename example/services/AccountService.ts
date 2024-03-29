import request from '@/utils/request'
import type { IdentityUserDto, RegisterDto, SendPasswordResetCodeDto, ResetPasswordDto } from './definitions'

export default class AccountService {
  static async register(input: RegisterDto) {
    const url = '/api/account/register'
    return request<IdentityUserDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async sendPasswordResetCode(input: SendPasswordResetCodeDto) {
    const url = '/api/account/send-password-reset-code'
    return request(url, {
      method: 'post',
      data: input
    })
  }

  static async resetPassword(input: ResetPasswordDto) {
    const url = '/api/account/reset-password'
    return request(url, {
      method: 'post',
      data: input
    })
  }
}
