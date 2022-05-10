import request from '@/utils/request'
import type {
  DriverDefinitionDto,
  CreateDriverDefinitionDto,
  DriverDefinitionDtoPagedResultDto,
  DriverUsageType,
  ChannelType,
  DriverWorkMode,
  UpdateDriverDefinitionDto
} from './definitions'

export interface DriverDefinitionGetListQuery {
  isActive?: boolean
  category?: string
  product?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
  usageType?: DriverUsageType
  channelType?: ChannelType
  workMode?: DriverWorkMode
}
export default class DriverDefinitionService {
  static async findSupportDriverDefinitions() {
    const url = '/api/gateways/driver-definition/find-support-driver-definitions'
    return request<DriverDefinitionDto[]>(url, {
      method: 'post'
    })
  }

  static async create(input: CreateDriverDefinitionDto) {
    const url = '/api/gateways/driver-definition'
    return request<DriverDefinitionDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: DriverDefinitionGetListQuery) {
    const url = '/api/gateways/driver-definition'
    return request<DriverDefinitionDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: UpdateDriverDefinitionDto) {
    const url = `/api/gateways/driver-definition/${id}`
    return request<DriverDefinitionDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/gateways/driver-definition/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/gateways/driver-definition/${id}`
    return request<DriverDefinitionDto>(url, {
      method: 'get'
    })
  }
}
