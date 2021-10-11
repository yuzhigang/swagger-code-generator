import request from '@/utils/request'
import type {
  HeatPlanDto,
  MasterPlanConfirmInput,
  ProductionPlanDto,
  SaveProductionPlanDto,
  ProductionPlanDtoPagedResultDto
} from './definitions'

export interface GetListQueryDto {
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
}
export default class ProductionPlanService {
  static async confirm(input: MasterPlanConfirmInput) {
    const url = '/api/aps/production-plan/confirm'
    return request<HeatPlanDto[]>(url, {
      method: 'post',
      data: input
    })
  }

  static async create(input: SaveProductionPlanDto) {
    const url = '/api/aps/production-plan'
    return request<ProductionPlanDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/aps/production-plan'
    return request<ProductionPlanDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveProductionPlanDto) {
    const url = `/api/aps/production-plan/${id}`
    return request<ProductionPlanDto>(url, {
      method: 'put',
      data: input
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
