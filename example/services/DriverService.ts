import request from '@/utils/request'
import {
  DriverDto,
  UpdateDriverDto,
  DriverDefinitionDto,
  CreateDriverDto,
  DriverDtoPagedResultDto
} from './definitions'

export default class DriverService {
  static async get(id: string) {
    const url = `/api/gateway/driver/${id}`
    return request<DriverDto>(url, {
      method: 'get'
    })
  }

  static async update(id: string, body: UpdateDriverDto) {
    const url = `/api/gateway/driver/${id}`
    return request<DriverDto>(url, {
      method: 'put',
      data: body
    })
  }

  static async delete(id: string) {
    const url = `/api/gateway/driver/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async findSupportDriverDefinitions() {
    const url = '/api/gateway/driver/find-support-driver-definitions'
    return request<DriverDefinitionDto[]>(url, {
      method: 'post'
    })
  }

  static async getDriverDefinitions(query: {
    isActive?: boolean
    usageType?: 0 | 1 | 2 | 3
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
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

  static async create(body: CreateDriverDto) {
    const url = '/api/gateway/driver'
    return request<DriverDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    isActive?: boolean
    runState?: 0 | 1 | 2
    driverDefinitionId?: string
    workMode?: 0 | 1
    key?: string
    usageType?: 0 | 1 | 2 | 3
    includeTags?: boolean
    includeDefition?: boolean
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/gateway/driver'
    return request<DriverDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
