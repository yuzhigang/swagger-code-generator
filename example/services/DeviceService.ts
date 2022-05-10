import request from '@/utils/request'
import type {
  FreshKeyDto,
  DeviceDto,
  UpdateDeviceDto,
  UpdateExtraPropertiesDto,
  CreateDeviceDto,
  DeviceDtoPagedResultDto
} from './definitions'

export interface DeviceGetListQuery {
  isActive?: boolean
  isGateway?: boolean
  parentId?: string
  locationId?: string
  key?: string
  includeLocation?: boolean
  includeTags?: boolean
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class DeviceService {
  static async freshKey(id: string) {
    const url = `/api/gateways/device/${id}/fresh-key`
    return request<FreshKeyDto>(url, {
      method: 'post'
    })
  }

  static async get(id: string) {
    const url = `/api/gateways/device/${id}`
    return request<DeviceDto>(url, {
      method: 'get'
    })
  }

  static async update(id: string, input: UpdateDeviceDto) {
    const url = `/api/gateways/device/${id}`
    return request<DeviceDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/gateways/device/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async updateExtraProperties(id: string, input: UpdateExtraPropertiesDto) {
    const url = `/api/gateways/device/${id}/extra-properties`
    return request<DeviceDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async create(input: CreateDeviceDto) {
    const url = '/api/gateways/device'
    return request<DeviceDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: DeviceGetListQuery) {
    const url = '/api/gateways/device'
    return request<DeviceDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
