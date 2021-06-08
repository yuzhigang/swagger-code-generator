import request from '@/utils/request'
import { TagDto, CreateTagDto, TagDtoPagedResultDto, UpdateTagDto } from './definitions'

export default class TagService {
  static async getTagsByDriver(driverId: string) {
    const url = `/api/gateway/tag/tags-by-driver/${driverId}`
    return request<TagDto[]>(url, {
      method: 'get'
    })
  }

  static async getTagsByDefinition(tagDefinitionId: string) {
    const url = `/api/gateway/tag/tags-by-definition/${tagDefinitionId}`
    return request<TagDto[]>(url, {
      method: 'get'
    })
  }

  static async getTagsByDevice(deviceId: string) {
    const url = `/api/gateway/tag/tags-by-device/${deviceId}`
    return request<TagDto[]>(url, {
      method: 'get'
    })
  }

  static async create(body: CreateTagDto) {
    const url = '/api/gateway/tag'
    return request<TagDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    isActive?: boolean
    deviceId?: string
    readMode?: 0 | 1 | 2
    tagDefinitionId?: string
    tagType?: 0 | 1 | 2 | 4
    includeDevice?: boolean
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/gateway/tag'
    return request<TagDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: UpdateTagDto) {
    const url = `/api/gateway/tag/${id}`
    return request<TagDto>(url, {
      method: 'put',
      data: body
    })
  }

  static async delete(id: string) {
    const url = `/api/gateway/tag/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/gateway/tag/${id}`
    return request<TagDto>(url, {
      method: 'get'
    })
  }
}
