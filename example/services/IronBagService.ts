import request from '@/utils/request'
import { IronBagDto, SaveIronBagDto, IronBagDtoPagedResultDto } from './definitions'

export default class IronBagService {
  static async create(body: SaveIronBagDto) {
    const url = '/api/aps/iron-bag'
    return request<IronBagDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    hotNo?: string
    bagNo?: string
    heatNo?: string
    mixed?: boolean
    start?: string
    end?: string
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/aps/iron-bag'
    return request<IronBagDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: SaveIronBagDto) {
    const url = `/api/aps/iron-bag/${id}`
    return request<IronBagDto>(url, {
      method: 'put',
      data: body
    })
  }

  static async delete(id: string) {
    const url = `/api/aps/iron-bag/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/aps/iron-bag/${id}`
    return request<IronBagDto>(url, {
      method: 'get'
    })
  }
}
