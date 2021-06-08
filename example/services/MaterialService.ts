import request from '@/utils/request'
import { AuxMaterialDto, SaveAuxMaterialDto, AuxMaterialDtoPagedResultDto } from './definitions'

export default class MaterialService {
  static async create(body: SaveAuxMaterialDto) {
    const url = '/api/aps/material'
    return request<AuxMaterialDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    name?: string
    code?: string
    category?: string
    subcategory?: string
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/aps/material'
    return request<AuxMaterialDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: SaveAuxMaterialDto) {
    const url = `/api/aps/material/${id}`
    return request<AuxMaterialDto>(url, {
      method: 'put',
      data: body
    })
  }

  static async delete(id: string) {
    const url = `/api/aps/material/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/aps/material/${id}`
    return request<AuxMaterialDto>(url, {
      method: 'get'
    })
  }
}
