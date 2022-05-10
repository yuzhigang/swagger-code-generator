import request from '@/utils/request'
import type {
  ChannelDto,
  CreateChannelDto,
  ChannelDtoPagedResultDto,
  ChannelType,
  UpdateChannelDto
} from './definitions'

export interface ChannelGetListQuery {
  isActive?: boolean
  sorting?: string
  skipCount?: number
  maxResultCount?: number
  channelType?: ChannelType
}
export default class ChannelService {
  static async create(input: CreateChannelDto) {
    const url = '/api/gateway/channel'
    return request<ChannelDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: ChannelGetListQuery) {
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
