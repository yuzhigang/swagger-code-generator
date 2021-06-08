import request from '@/utils/request'
import { DeviceDto, UpdateDeviceDto, CreateDeviceDto, DeviceDtoPagedResultDto } from './definitions'

export default class DeviceService {
  static async get(id: string) {
    const url = `/api/gateway/device/${id}`
    return request<DeviceDto>(url, {
      method: 'get'
    })
  }

  static async update(id: string, body: UpdateDeviceDto) {
    const url = `/api/gateway/device/${id}`
    return request<DeviceDto>(url, {
      method: 'put',
      data: body
    })
  }

  static async delete(id: string) {
    const url = `/api/gateway/device/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async create(body: CreateDeviceDto) {
    const url = '/api/gateway/device'
    return request<DeviceDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    isActive?: boolean
    isGateway?: boolean
    parentId?: string
    key?: string
    includeLocation?: boolean
    includeTags?: boolean
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/gateway/device'
    return request<DeviceDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
