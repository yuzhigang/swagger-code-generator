import request from '@/utils/request'
import type { ChannelDto, CreateChannelDto, ChannelDtoPagedResultDto, UpdateChannelDto } from './definitions'

export interface GetListQueryDto {
  isActive?: boolean
  channelType?: 'Network' | 'SerialPort' | 'Database'
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class ChannelService {
  static async create(input: CreateChannelDto) {
    const url = '/api/gateway/channel'
    return request<ChannelDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/gateway/channel'
    return request<ChannelDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: UpdateChannelDto) {
    const url = `/api/gateway/channel/${id}`
    return request<ChannelDto>(url, {
      method: 'put',
      data: input
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
