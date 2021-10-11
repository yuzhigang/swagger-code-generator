import request from '@/utils/request'
import type { MaintenancePlanDto, SaveMaintenancePlanDto, MaintenancePlanDtoPagedResultDto } from './definitions'

export interface GetListQueryDto {
  name?: string
  shortName?: string
  code?: string
  process?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class MaintenancePlanService {
  static async create(input: SaveMaintenancePlanDto) {
    const url = '/api/aps/maintenance-plan'
    return request<MaintenancePlanDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/aps/maintenance-plan'
    return request<MaintenancePlanDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveMaintenancePlanDto) {
    const url = `/api/aps/maintenance-plan/${id}`
    return request<MaintenancePlanDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/aps/maintenance-plan/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/aps/maintenance-plan/${id}`
    return request<MaintenancePlanDto>(url, {
      method: 'get'
    })
  }
}
