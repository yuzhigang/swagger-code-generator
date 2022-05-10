import request from '@/utils/request'
import type {
  TagDefinitionDto,
  UpdateExtraPropertiesDto,
  CreateTagDefinitionDto,
  TagDefinitionDtoPagedResultDto,
  TagValueType,
  ReadMode,
  UpdateTagDefinitionDto
} from './definitions'

export interface TagDefinitionGetListQuery {
  key?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
  valueType?: TagValueType
  readMode?: ReadMode
}
export default class TagDefinitionService {
  static async updateExtraProperties(id: string, input: UpdateExtraPropertiesDto) {
    const url = `/api/gateways/tag-definition/${id}/extra-properties`
    return request<TagDefinitionDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async create(input: CreateTagDefinitionDto) {
    const url = '/api/gateways/tag-definition'
    return request<TagDefinitionDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: TagDefinitionGetListQuery) {
    const url = '/api/gateways/tag-definition'
    return request<TagDefinitionDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: UpdateTagDefinitionDto) {
    const url = `/api/gateways/tag-definition/${id}`
    return request<TagDefinitionDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/gateways/tag-definition/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/gateways/tag-definition/${id}`
    return request<TagDefinitionDto>(url, {
      method: 'get'
    })
  }
}
