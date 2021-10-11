import request from '@/utils/request'
import type { LadleRecordDto, LadleRecordDtoPagedResultDto } from './definitions'

export interface GetListQueryDto {
  heatNo?: string
  ladleNo?: string
  start?: string
  end?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class LadleRecordService {
  static async get(id: string) {
    const url = `/api/lms/ladle-record/${id}`
    return request<LadleRecordDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/lms/ladle-record'
    return request<LadleRecordDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
