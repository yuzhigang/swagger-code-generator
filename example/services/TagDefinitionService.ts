import request from '@/utils/request'
import {
  TagDefinitionDto,
  CreateTagDefinitionDto,
  TagDefinitionDtoPagedResultDto,
  UpdateTagDefinitionDto
} from './definitions'

export default class TagDefinitionService {
  static async create(body: CreateTagDefinitionDto) {
    const url = '/api/gateway/tag-definition'
    return request<TagDefinitionDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    valueType?: 0 | 1 | 2 | 3 | 4
    key?: string
    readMode?: 0 | 1 | 2
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/gateway/tag-definition'
    return request<TagDefinitionDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: UpdateTagDefinitionDto) {
    const url = `/api/gateway/tag-definition/${id}`
    return request<TagDefinitionDto>(url, {
      method: 'put',
      data: body
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
