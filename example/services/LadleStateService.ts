import request from '@/utils/request'
import { LadleStateDto, LadleStateDtoPagedResultDto } from './definitions'

export default class LadleStateService {
  static async get(id: string) {
    const url = `/api/lms/ladle-state/${id}`
    return request<LadleStateDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: { ladleNo?: string; isActive?: boolean }) {
    const url = '/api/lms/ladle-state'
    return request<LadleStateDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
