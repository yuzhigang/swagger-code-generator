import request from '@/utils/request'
import type { AuxMaterialDto, SaveAuxMaterialDto, AuxMaterialDtoPagedResultDto } from './definitions'

export interface GetListQueryDto {
  name?: string
  code?: string
  category?: string
  subcategory?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class MaterialService {
  static async create(input: SaveAuxMaterialDto) {
    const url = '/api/aps/material'
    return request<AuxMaterialDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/aps/material'
    return request<AuxMaterialDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveAuxMaterialDto) {
    const url = `/api/aps/material/${id}`
    return request<AuxMaterialDto>(url, {
      method: 'put',
      data: input
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
