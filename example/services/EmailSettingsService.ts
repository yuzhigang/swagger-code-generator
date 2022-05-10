import request from '@/utils/request'
import type { EmailSettingsDto, UpdateEmailSettingsDto } from './definitions'

export default class EmailSettingsService {
  static async get() {
    const url = '/api/setting-management/emailing'
    return request<EmailSettingsDto>(url, {
      method: 'get'
    })
  }

  static async update(input: UpdateEmailSettingsDto) {
    const url = '/api/setting-management/emailing'
    return request(url, {
      method: 'post',
      data: input
    })
  }
}
