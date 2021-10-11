import request from '@/utils/request'
import type { SampleDto, SaveSampleDto, SampleDtoPagedResultDto } from './definitions'

export interface GetListQueryDto {
  heatNo?: string
  steelType?: string
  kind?: 'Iron' | 'Steel' | 'Slug'
  machine?: string
  start?: string
  end?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class SampleService {
  static async create(input: SaveSampleDto) {
    const url = '/api/aps/sample'
    return request<SampleDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/aps/sample'
    return request<SampleDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveSampleDto) {
    const url = `/api/aps/sample/${id}`
    return request<SampleDto>(url, {
      method: 'put',
      data: input
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
