import request from '@/utils/request'
import type { TagValueDto, TagValueDtoPagedResultDto } from './definitions'

export interface TagValueGetListQuery {
  start?: string
  end?: string
  tagId?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class TagValueService {
  static async get(tagId: string, clock: string) {
    const url = `/api/gateways/tag-value/${tagId}/${clock}`
    return request<TagValueDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: TagValueGetListQuery) {
    const url = '/api/gateways/tag-value'
    return request<TagValueDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
