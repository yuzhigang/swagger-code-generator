import request from '@/utils/request'
import { ChannelDto, CreateChannelDto, ChannelDtoPagedResultDto, UpdateChannelDto } from './definitions'

export default class ChannelService {
  static async create(body: CreateChannelDto) {
    const url = '/api/gateway/channel'
    return request<ChannelDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    isActive?: boolean
    channelType?: 0 | 1 | 2
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/gateway/channel'
    return request<ChannelDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: UpdateChannelDto) {
    const url = `/api/gateway/channel/${id}`
    return request<ChannelDto>(url, {
      method: 'put',
      data: body
    })
  }

  static async delete(id: string) {
    const url = `/api/gateway/channel/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/gateway/channel/${id}`
    return request<ChannelDto>(url, {
      method: 'get'
    })
  }
}
