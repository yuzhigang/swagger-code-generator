import request from '@/utils/request'
import type { SampleDto } from './definitions'

export default class SampleService {
  static async get() {
    const url = '/api/Ems/sample'
    return request<SampleDto>(url, {
      method: 'get'
    })
  }

  static async getAuthorized() {
    const url = '/api/Ems/sample/authorized'
    return request<SampleDto>(url, {
      method: 'get'
    })
  }

  static async get() {
    const url = '/api/ems/sample'
    return request<SampleDto>(url, {
      method: 'get'
    })
  }

  static async getAuthorized() {
    const url = '/api/ems/sample/authorized'
    return request<SampleDto>(url, {
      method: 'get'
    })
  }
}
