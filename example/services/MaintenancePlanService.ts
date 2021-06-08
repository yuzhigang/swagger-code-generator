import request from '@/utils/request'
import { MaintenancePlanDto, SaveMaintenancePlanDto, MaintenancePlanDtoPagedResultDto } from './definitions'

export default class MaintenancePlanService {
  static async create(body: SaveMaintenancePlanDto) {
    const url = '/api/aps/maintenance-plan'
    return request<MaintenancePlanDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    name?: string
    shortName?: string
    code?: string
    process?: string
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/aps/maintenance-plan'
    return request<MaintenancePlanDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: SaveMaintenancePlanDto) {
    const url = `/api/aps/maintenance-plan/${id}`
    return request<MaintenancePlanDto>(url, {
      method: 'put',
      data: body
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
