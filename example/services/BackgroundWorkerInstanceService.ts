import request from '@/utils/request'
import {
  boolean,
  BackgroundWorkerInstanceDto,
  SaveBackgroundWorkerInstanceDto,
  BackgroundWorkerInstanceDtoPagedResultDto
} from './definitions'

export default class BackgroundWorkerInstanceService {
  static async runOnce(workerId: string) {
    const url = `/api/background/background-worker-instance/run-once/${workerId}`
    return request<boolean>(url, {
      method: 'post'
    })
  }

  static async start(instanceId: string) {
    const url = `/api/background/background-worker-instance/start/${instanceId}`
    return request(url, {
      method: 'post'
    })
  }

  static async startAll() {
    const url = '/api/background/background-worker-instance/start-all'
    return request(url, {
      method: 'post'
    })
  }

  static async stop(instanceId: string) {
    const url = `/api/background/background-worker-instance/stop/${instanceId}`
    return request(url, {
      method: 'post'
    })
  }

  static async stopAll() {
    const url = '/api/background/background-worker-instance/stop-all'
    return request(url, {
      method: 'post'
    })
  }

  static async create(body: SaveBackgroundWorkerInstanceDto) {
    const url = '/api/background/background-worker-instance'
    return request<BackgroundWorkerInstanceDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    key?: string
    status?: number
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/background/background-worker-instance'
    return request<BackgroundWorkerInstanceDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: SaveBackgroundWorkerInstanceDto) {
    const url = `/api/background/background-worker-instance/${id}`
    return request<BackgroundWorkerInstanceDto>(url, {
      method: 'put',
      data: body
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
