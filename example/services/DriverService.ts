import request from '@/utils/request'
import type {
  AddDriverTagDto,
  UpdateDriverTagDto,
  UpdateDriverSettingsDto,
  DriverDto,
  UpdateDriverDto,
  UpdateExtraPropertiesDto,
  CreateDriverDto,
  DriverDtoPagedResultDto,
  DriverRunState,
  DriverWorkMode,
  DriverUsageType
} from './definitions'

export interface DriverRemoveTagQuery {
  tagId?: string
}
export interface DriverGetListQuery {
  isActive?: boolean
  driverDefinitionId?: string
  category?: string
  subcategory?: string
  key?: string
  includeTags?: boolean
  includeDefinition?: boolean
  sorting?: string
  skipCount?: number
  maxResultCount?: number
  runState?: DriverRunState
  workMode?: DriverWorkMode
  usageType?: DriverUsageType
}
export default class DriverService {
  static async addTag(id: string, input: AddDriverTagDto) {
    const url = `/api/gateways/driver/${id}/tag`
    return request(url, {
      method: 'post',
      data: input
    })
  }

  static async updateTag(id: string, input: UpdateDriverTagDto) {
    const url = `/api/gateways/driver/${id}/tag`
    return request(url, {
      method: 'put',
      data: input
    })
  }

  static async removeTag(id: string, query: DriverRemoveTagQuery) {
    const url = `/api/gateways/driver/${id}/tag`
    return request(url, {
      method: 'delete',
      params: query
    })
  }

  static async updateSettings(id: string, input: UpdateDriverSettingsDto) {
    const url = `/api/gateways/driver/${id}/settings`
    return request(url, {
      method: 'put',
      data: input
    })
  }

  static async get(id: string) {
    const url = `/api/gateways/driver/${id}`
    return request<DriverDto>(url, {
      method: 'get'
    })
  }

  static async delete(id: string) {
    const url = `/api/gateways/driver/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async update(id: string, input: UpdateDriverDto) {
    const url = `/api/gateways/driver/${id}`
    return request<DriverDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async start(driverId: string) {
    const url = `/api/gateways/driver/start/${driverId}`
    return request<DriverDto>(url, {
      method: 'post'
    })
  }

  static async pause(driverId: string) {
    const url = `/api/gateways/driver/pause/${driverId}`
    return request<DriverDto>(url, {
      method: 'post'
    })
  }

  static async stop(driverId: string) {
    const url = `/api/gateways/driver/stop/${driverId}`
    return request<DriverDto>(url, {
      method: 'post'
    })
  }

  static async updateExtraProperties(id: string, input: UpdateExtraPropertiesDto) {
    const url = `/api/gateways/driver/${id}/extra-properties`
    return request<DriverDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async create(input: CreateDriverDto) {
    const url = '/api/gateways/driver'
    return request<DriverDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: DriverGetListQuery) {
    const url = '/api/gateways/driver'
    return request<DriverDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
