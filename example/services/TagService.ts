import request from '@/utils/request'
import type {
  TagDto,
  CreateTagDto,
  TagDtoPagedResultDto,
  ReadMode,
  TagType,
  UpdateExtraPropertiesDto,
  UpdateTagDto
} from './definitions'

export interface TagGetListQuery {
  isActive?: boolean
  deviceId?: string
  driverId?: string
  tagDefinitionId?: string
  includeDevice?: boolean
  sorting?: string
  skipCount?: number
  maxResultCount?: number
  readMode?: ReadMode
  tagType?: TagType
}
export default class TagService {
  static async create(input: CreateTagDto) {
    const url = '/api/gateways/tag'
    return request<TagDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: TagGetListQuery) {
    const url = '/api/gateways/tag'
    return request<TagDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async getTagsByDriver(driverId: string) {
    const url = `/api/gateways/tag/tags-by-driver/${driverId}`
    return request<TagDto[]>(url, {
      method: 'get'
    })
  }

  static async getTagsByDefinition(tagDefinitionId: string) {
    const url = `/api/gateways/tag/tags-by-definition/${tagDefinitionId}`
    return request<TagDto[]>(url, {
      method: 'get'
    })
  }

  static async getTagsByDevice(deviceId: string) {
    const url = `/api/gateways/tag/tags-by-device/${deviceId}`
    return request<TagDto[]>(url, {
      method: 'get'
    })
  }

  static async updateExtraProperties(id: string, input: UpdateExtraPropertiesDto) {
    const url = `/api/gateways/tag/${id}/extra-properties`
    return request<TagDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async update(id: string, input: UpdateTagDto) {
    const url = `/api/gateways/tag/${id}`
    return request<TagDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/gateways/tag/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/gateways/tag/${id}`
    return request<TagDto>(url, {
      method: 'get'
    })
  }
}
