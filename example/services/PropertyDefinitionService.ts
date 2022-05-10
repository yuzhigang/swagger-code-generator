import request from '@/utils/request'
import type {
  PropertyDefinitionDto,
  CreatePropertyDefinitionDto,
  PropertyDefinitionDtoPagedResultDto,
  UpdatePropertyDefinitionDto
} from './definitions'

export interface PropertyDefinitionGetListQuery {
  name?: string
  category?: string
  key?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class PropertyDefinitionService {
  static async create(input: CreatePropertyDefinitionDto) {
    const url = '/api/nodes/property-definition'
    return request<PropertyDefinitionDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: PropertyDefinitionGetListQuery) {
    const url = '/api/nodes/property-definition'
    return request<PropertyDefinitionDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: UpdatePropertyDefinitionDto) {
    const url = `/api/nodes/property-definition/${id}`
    return request<PropertyDefinitionDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/nodes/property-definition/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/nodes/property-definition/${id}`
    return request<PropertyDefinitionDto>(url, {
      method: 'get'
    })
  }
}
