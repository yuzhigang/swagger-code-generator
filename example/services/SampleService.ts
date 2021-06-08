import request from '@/utils/request'
import { SampleDto, SaveSampleDto, SampleDtoPagedResultDto } from './definitions'

export default class SampleService {
  static async create(body: SaveSampleDto) {
    const url = '/api/aps/sample'
    return request<SampleDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    heatNo?: string
    steelType?: string
    kind?: 0 | 1 | 2
    machine?: string
    start?: string
    end?: string
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/aps/sample'
    return request<SampleDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: SaveSampleDto) {
    const url = `/api/aps/sample/${id}`
    return request<SampleDto>(url, {
      method: 'put',
      data: body
    })
  }

  static async delete(id: string) {
    const url = `/api/aps/sample/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/aps/sample/${id}`
    return request<SampleDto>(url, {
      method: 'get'
    })
  }
}
