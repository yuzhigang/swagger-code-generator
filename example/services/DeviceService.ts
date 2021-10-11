import request from '@/utils/request'
import type { DeviceDto, UpdateDeviceDto, CreateDeviceDto, DeviceDtoPagedResultDto } from './definitions'

export interface GetListQueryDto {
  isActive?: boolean
  isGateway?: boolean
  parentId?: string
  key?: string
  includeLocation?: boolean
  includeTags?: boolean
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class DeviceService {
  static async get(id: string) {
    const url = `/api/gateway/device/${id}`
    return request<DeviceDto>(url, {
      method: 'get'
    })
  }

  static async update(id: string, input: UpdateDeviceDto) {
    const url = `/api/gateway/device/${id}`
    return request<DeviceDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/gateway/device/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async create(input: CreateDeviceDto) {
    const url = '/api/gateway/device'
    return request<DeviceDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/gateway/device'
    return request<DeviceDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
