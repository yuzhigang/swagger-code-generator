import request from '@/utils/request'
import {
  HeatPlanDto,
  MasterPlanConfirmInput,
  ProductionPlanDto,
  SaveProductionPlanDto,
  ProductionPlanDtoPagedResultDto
} from './definitions'

export default class ProductionPlanService {
  static async confirm(body: MasterPlanConfirmInput) {
    const url = '/api/aps/production-plan/confirm'
    return request<HeatPlanDto[]>(url, {
      method: 'post',
      data: body
    })
  }

  static async create(body: SaveProductionPlanDto) {
    const url = '/api/aps/production-plan'
    return request<ProductionPlanDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    pono?: string
    masterPlanId?: string
    isActive?: boolean
    castId?: string
    steelType?: string
    planStart?: string
    planEnd?: string
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/aps/production-plan'
    return request<ProductionPlanDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: SaveProductionPlanDto) {
    const url = `/api/aps/production-plan/${id}`
    return request<ProductionPlanDto>(url, {
      method: 'put',
      data: body
    })
  }

  static async delete(id: string) {
    const url = `/api/aps/production-plan/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/aps/production-plan/${id}`
    return request<ProductionPlanDto>(url, {
      method: 'get'
    })
  }
}
