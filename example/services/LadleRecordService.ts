import request from '@/utils/request'
import { LadleRecordDto, LadleRecordDtoPagedResultDto } from './definitions'

export default class LadleRecordService {
  static async get(id: string) {
    const url = `/api/lms/ladle-record/${id}`
    return request<LadleRecordDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: {
    heatNo?: string
    ladleNo?: string
    start?: string
    end?: string
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/lms/ladle-record'
    return request<LadleRecordDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
