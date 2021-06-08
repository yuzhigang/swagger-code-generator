import request from '@/utils/request'
import { AdditionDto, SaveAdditionDto, AdditionDtoPagedResultDto } from './definitions'

export default class AdditionService {
  static async create(body: SaveAdditionDto) {
    const url = '/api/aps/addition'
    return request<AdditionDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    heatNo?: string
    materialId?: string
    start?: string
    end?: string
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/aps/addition'
    return request<AdditionDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: SaveAdditionDto) {
    const url = `/api/aps/addition/${id}`
    return request<AdditionDto>(url, {
      method: 'put',
      data: body
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
