import request from '@/utils/request'
import type {
  BackgroundWorkerInstanceDto,
  SaveBackgroundWorkerInstanceDto,
  BackgroundWorkerInstanceDtoPagedResultDto
} from './definitions'

export interface BackgroundWorkerInstanceGetListQuery {
  key?: string
  status?: number
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class BackgroundWorkerInstanceService {
  static async create(input: SaveBackgroundWorkerInstanceDto) {
    const url = '/api/background/background-worker-instance'
    return request<BackgroundWorkerInstanceDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: BackgroundWorkerInstanceGetListQuery) {
    const url = '/api/background/background-worker-instance'
    return request<BackgroundWorkerInstanceDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveBackgroundWorkerInstanceDto) {
    const url = `/api/background/background-worker-instance/${id}`
    return request<BackgroundWorkerInstanceDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/background/background-worker-instance/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/background/background-worker-instance/${id}`
    return request<BackgroundWorkerInstanceDto>(url, {
      method: 'get'
    })
  }
}
