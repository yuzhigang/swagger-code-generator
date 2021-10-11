import request from '@/utils/request'
import type { AdditionDto, SaveAdditionDto, AdditionDtoPagedResultDto } from './definitions'

export interface GetListQueryDto {
  heatNo?: string
  materialId?: string
  start?: string
  end?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class AdditionService {
  static async create(input: SaveAdditionDto) {
    const url = '/api/aps/addition'
    return request<AdditionDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/aps/addition'
    return request<AdditionDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveAdditionDto) {
    const url = `/api/aps/addition/${id}`
    return request<AdditionDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/aps/addition/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/aps/addition/${id}`
    return request<AdditionDto>(url, {
      method: 'get'
    })
  }
}
