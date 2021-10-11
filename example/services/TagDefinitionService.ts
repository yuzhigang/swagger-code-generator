import request from '@/utils/request'
import type {
  TagDefinitionDto,
  CreateTagDefinitionDto,
  TagDefinitionDtoPagedResultDto,
  UpdateTagDefinitionDto
} from './definitions'

export interface GetListQueryDto {
  valueType?: 'String' | 'Boolean' | 'Int' | 'Float' | 'Json'
  key?: string
  readMode?: 'Read' | 'Write' | 'ReadWrite'
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class TagDefinitionService {
  static async create(input: CreateTagDefinitionDto) {
    const url = '/api/gateway/tag-definition'
    return request<TagDefinitionDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/gateway/tag-definition'
    return request<TagDefinitionDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: UpdateTagDefinitionDto) {
    const url = `/api/gateway/tag-definition/${id}`
    return request<TagDefinitionDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/gateway/tag-definition/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/gateway/tag-definition/${id}`
    return request<TagDefinitionDto>(url, {
      method: 'get'
    })
  }
}
