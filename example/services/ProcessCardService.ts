import request from '@/utils/request'
import { ProcessCardDto, SaveProcessCardDto, ProcessCardDtoPagedResultDto } from './definitions'

export default class ProcessCardService {
  static async create(body: SaveProcessCardDto) {
    const url = '/api/aps/process-card'
    return request<ProcessCardDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    name?: string
    shortName?: string
    code?: string
    process?: string
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/aps/process-card'
    return request<ProcessCardDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: SaveProcessCardDto) {
    const url = `/api/aps/process-card/${id}`
    return request<ProcessCardDto>(url, {
      method: 'put',
      data: body
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
