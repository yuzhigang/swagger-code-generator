import request from '@/utils/request'
import { TagValueDto, TagValueDtoPagedResultDto } from './definitions'

export default class TagValueService {
  static async get(tagId: string, clock: string) {
    const url = `/api/gateway/tag-value/${TagId}/${Clock}`
    return request<TagValueDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: {
    start?: string
    end?: string
    tagId?: string
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/gateway/tag-value'
    return request<TagValueDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
