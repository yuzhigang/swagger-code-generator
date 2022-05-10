import request from '@/utils/request'
import type { BackgroundWorkerLogDto, BackgroundWorkerLogDtoPagedResultDto, LogLevel } from './definitions'

export interface BackgroundWorkerLogGetListQuery {
  start?: string
  end?: string
  instanceId?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
  category?: LogLevel
}
export default class BackgroundWorkerLogService {
  static async get(id: string) {
    const url = `/api/background/background-worker-log/${id}`
    return request<BackgroundWorkerLogDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: BackgroundWorkerLogGetListQuery) {
    const url = '/api/background/background-worker-log'
    return request<BackgroundWorkerLogDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
