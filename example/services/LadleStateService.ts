import request from '@/utils/request'
import type { LadleStateDto, LadleStateDtoPagedResultDto } from './definitions'

export interface GetListQueryDto {
  ladleNo?: string
  isActive?: boolean
}
export default class LadleStateService {
  static async get(id: string) {
    const url = `/api/lms/ladle-state/${id}`
    return request<LadleStateDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/lms/ladle-state'
    return request<LadleStateDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
