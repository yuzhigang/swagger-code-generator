import request from '@/utils/request'
import type {
  HeatPlanExchangeProductionPlanInput,
  HeatPlanChangeStatusInput,
  HeatPlanChangeShiftFlagInput,
  HeatPlanChangeTundishFlagInput,
  HeatPlanSimpleDtoListResultDto,
  HeatPlanLatestQueryDto,
  HeatPlanDto,
  HeatPlanDtoPagedResultDto
} from './definitions'

export interface RemovePlansByPonosQueryDto {
  ponos?: [][]
}
export interface GetListQueryDto {
  heatNo?: string
  pono?: string
  state?: 'PlanReady' | 'Start' | 'End'
  start?: string
  end?: string
  steelType?: string
  includeJobPlans?: boolean
  includeProductionPlan?: boolean
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class HeatPlanService {
  static async exchangeProductionPlan(input: HeatPlanExchangeProductionPlanInput) {
    const url = '/api/aps/heat-plan/exchange-production-plan'
    return request(url, {
      method: 'post',
      data: input
    })
  }

  static async removePlansByPonos(query: RemovePlansByPonosQueryDto) {
    const url = '/api/aps/heat-plan/plans-by-ponos'
    return request(url, {
      method: 'delete',
      params: query
    })
  }

  static async changeStatus(input: HeatPlanChangeStatusInput) {
    const url = '/api/aps/heat-plan/change-status'
    return request(url, {
      method: 'post',
      data: input
    })
  }

  static async changeShiftFlag(input: HeatPlanChangeShiftFlagInput) {
    const url = '/api/aps/heat-plan/change-shift-flag'
    return request(url, {
      method: 'post',
      data: input
    })
  }

  static async changeTundishFlag(input: HeatPlanChangeTundishFlagInput) {
    const url = '/api/aps/heat-plan/change-tundish-flag'
    return request(url, {
      method: 'post',
      data: input
    })
  }

  static async latest(input: HeatPlanLatestQueryDto) {
    const url = '/api/aps/heat-plan/latest'
    return request<HeatPlanSimpleDtoListResultDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async get(id: string) {
    const url = `/api/aps/heat-plan/${id}`
    return request<HeatPlanDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/aps/heat-plan'
    return request<HeatPlanDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
