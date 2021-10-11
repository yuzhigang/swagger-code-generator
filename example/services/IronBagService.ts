import request from '@/utils/request'
import type { IronBagDto, SaveIronBagDto, IronBagDtoPagedResultDto } from './definitions'

export interface GetListQueryDto {
  hotNo?: string
  bagNo?: string
  heatNo?: string
  mixed?: boolean
  start?: string
  end?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class IronBagService {
  static async create(input: SaveIronBagDto) {
    const url = '/api/aps/iron-bag'
    return request<IronBagDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/aps/iron-bag'
    return request<IronBagDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveIronBagDto) {
    const url = `/api/aps/iron-bag/${id}`
    return request<IronBagDto>(url, {
      method: 'put',
      data: input
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
