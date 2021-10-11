import request from '@/utils/request'
import type { ProcessCardDto, SaveProcessCardDto, ProcessCardDtoPagedResultDto } from './definitions'

export interface GetListQueryDto {
  name?: string
  shortName?: string
  code?: string
  process?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class ProcessCardService {
  static async create(input: SaveProcessCardDto) {
    const url = '/api/aps/process-card'
    return request<ProcessCardDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/aps/process-card'
    return request<ProcessCardDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveProcessCardDto) {
    const url = `/api/aps/process-card/${id}`
    return request<ProcessCardDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/aps/process-card/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/aps/process-card/${id}`
    return request<ProcessCardDto>(url, {
      method: 'get'
    })
  }
}
