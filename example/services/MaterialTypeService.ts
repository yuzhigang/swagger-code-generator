import request from '@/utils/request'
import type {
  MaterialTypeDto,
  CreateMaterialTypeDto,
  MaterialTypeDtoPagedResultDto,
  UpdateMaterialTypeDto
} from './definitions'

export interface MaterialTypeGetListQuery {
  name?: string
  category?: string
  key?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class MaterialTypeService {
  static async create(input: CreateMaterialTypeDto) {
    const url = '/api/nodes/material-type'
    return request<MaterialTypeDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: MaterialTypeGetListQuery) {
    const url = '/api/nodes/material-type'
    return request<MaterialTypeDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: UpdateMaterialTypeDto) {
    const url = `/api/nodes/material-type/${id}`
    return request<MaterialTypeDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/nodes/material-type/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/nodes/material-type/${id}`
    return request<MaterialTypeDto>(url, {
      method: 'get'
    })
  }
}
