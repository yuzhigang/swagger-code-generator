import request from '@/utils/request'
import type { BackgroundWorkerLogDto, BackgroundWorkerLogDtoPagedResultDto } from './definitions'

export interface GetListQueryDto {
  start?: string
  end?: string
  instanceId?: string
  category?: 'Info' | 'Warn' | 'Error'
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class BackgroundWorkerLogService {
  static async get(id: string) {
    const url = `/api/background/background-worker-log/${id}`
    return request<BackgroundWorkerLogDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/background/background-worker-log'
    return request<BackgroundWorkerLogDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
