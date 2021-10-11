import request from '@/utils/request'
import type {
  AddDriverTagDto,
  UpdateDriverTagDto,
  SaveDriverSettingsDto,
  DriverDto,
  UpdateDriverDto,
  DriverDefinitionDto,
  CreateDriverDto,
  DriverDtoPagedResultDto
} from './definitions'

export interface RemoveDriverTagQueryDto {
  driverId?: string
  tagId?: string
}
export interface GetDriverDefinitionsQueryDto {
  isActive?: boolean
  usageType?: 'Reader' | 'Writer' | 'Store' | 'Publisher'
  category?: string
  product?: string
  channelType?: 'Network' | 'SerialPort' | 'Database'
  workMode?: 'Pull' | 'Listen'
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export interface GetListQueryDto {
  isActive?: boolean
  runState?: 'Stop' | 'Running' | 'Pause'
  driverDefinitionId?: string
  workMode?: 'Pull' | 'Listen'
  category?: string
  subcategory?: string
  key?: string
  usageType?: 'Reader' | 'Writer' | 'Store' | 'Publisher'
  includeTags?: boolean
  includeDefinition?: boolean
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class DriverService {
  static async addDriverTag(input: AddDriverTagDto) {
    const url = '/api/gateway/driver/driver-tag'
    return request(url, {
      method: 'post',
      data: input
    })
  }

  static async updateDriverTag(input: UpdateDriverTagDto) {
    const url = '/api/gateway/driver/driver-tag'
    return request(url, {
      method: 'put',
      data: input
    })
  }

  static async removeDriverTag(query: RemoveDriverTagQueryDto) {
    const url = '/api/gateway/driver/driver-tag'
    return request(url, {
      method: 'delete',
      params: query
    })
  }

  static async saveDriverSettings(input: SaveDriverSettingsDto) {
    const url = '/api/gateway/driver/save-driver-settings'
    return request(url, {
      method: 'post',
      data: input
    })
  }

  static async get(id: string) {
    const url = `/api/gateway/driver/${id}`
    return request<DriverDto>(url, {
      method: 'get'
    })
  }

  static async delete(id: string) {
    const url = `/api/gateway/driver/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async update(id: string, input: UpdateDriverDto) {
    const url = `/api/gateway/driver/${id}`
    return request<DriverDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async findSupportDriverDefinitions() {
    const url = '/api/gateway/driver/find-support-driver-definitions'
    return request<DriverDefinitionDto[]>(url, {
      method: 'post'
    })
  }

  static async getDriverDefinitions(query: GetDriverDefinitionsQueryDto) {
    const url = '/api/gateway/driver/driver-definitions'
    return request<DriverDefinitionDto[]>(url, {
      method: 'get',
      params: query
    })
  }

  static async startReader(driverId: string) {
    const url = `/api/gateway/driver/start-reader/${driverId}`
    return request(url, {
      method: 'post'
    })
  }

  static async stopReader(driverId: string) {
    const url = `/api/gateway/driver/stop-reader/${driverId}`
    return request(url, {
      method: 'post'
    })
  }

  static async deleteReader(driverId: string) {
    const url = `/api/gateway/driver/reader/${driverId}`
    return request(url, {
      method: 'delete'
    })
  }

  static async startWriter(driverId: string) {
    const url = `/api/gateway/driver/start-writer/${driverId}`
    return request(url, {
      method: 'post'
    })
  }

  static async stopWriter(driverId: string) {
    const url = `/api/gateway/driver/stop-writer/${driverId}`
    return request(url, {
      method: 'post'
    })
  }

  static async create(input: CreateDriverDto) {
    const url = '/api/gateway/driver'
    return request<DriverDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/gateway/driver'
    return request<DriverDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
