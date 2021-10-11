import request from '@/utils/request'
import type { TagDto, CreateTagDto, TagDtoPagedResultDto, UpdateTagDto } from './definitions'

export interface GetListQueryDto {
  isActive?: boolean
  deviceId?: string
  driverId?: string
  readMode?: 'Read' | 'Write' | 'ReadWrite'
  tagDefinitionId?: string
  tagType?: 'IO' | 'User' | 'Computing' | 'System'
  includeDevice?: boolean
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class TagService {
  static async create(input: CreateTagDto) {
    const url = '/api/gateway/tag'
    return request<TagDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/gateway/tag'
    return request<TagDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

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

  static async update(id: string, input: UpdateTagDto) {
    const url = `/api/gateway/tag/${id}`
    return request<TagDto>(url, {
      method: 'put',
      data: input
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
