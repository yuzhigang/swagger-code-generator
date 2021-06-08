import request from '@/utils/request'
import { BackgroundWorkerLogDto, BackgroundWorkerLogDtoPagedResultDto } from './definitions'

export default class BackgroundWorkerLogService {
  static async get(id: string) {
    const url = `/api/background/background-worker-log/${id}`
    return request<BackgroundWorkerLogDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: {
    start?: string
    end?: string
    instanceId?: string
    category?: 1 | 2 | 3
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/background/background-worker-log'
    return request<BackgroundWorkerLogDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
