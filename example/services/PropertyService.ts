import request from '@/utils/request'
import type { PropertyDto, CreatePropertyDto, PropertyDtoPagedResultDto, UpdatePropertyDto } from './definitions'

export interface PropertyGetListQuery {
  propertyDefinitionId?: string
  isMain?: boolean
  entityType?: string
  entityId?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class PropertyService {
  static async create(input: CreatePropertyDto) {
    const url = '/api/nodes/property'
    return request<PropertyDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: PropertyGetListQuery) {
    const url = '/api/nodes/property'
    return request<PropertyDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: UpdatePropertyDto) {
    const url = `/api/nodes/property/${id}`
    return request<PropertyDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/nodes/property/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/nodes/property/${id}`
    return request<PropertyDto>(url, {
      method: 'get'
    })
  }
}
