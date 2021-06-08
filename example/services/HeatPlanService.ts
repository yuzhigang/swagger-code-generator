import request from '@/utils/request'
import {
  HeatPlanExchangeProductionPlanInput,
  HeatPlanChangeStatusInput,
  HeatPlanChangeShiftFlagInput,
  HeatPlanChangeTundishFlagInput,
  HeatPlanSimpleDtoListResultDto,
  HeatPlanLatestQueryDto,
  HeatPlanDto,
  HeatPlanDtoPagedResultDto
} from './definitions'

export default class HeatPlanService {
  static async exchangeProductionPlan(body: HeatPlanExchangeProductionPlanInput) {
    const url = '/api/aps/heat-plan/exchange-production-plan'
    return request(url, {
      method: 'post',
      data: body
    })
  }

  static async removePlansByPonos(query: { ponos?: string[] }) {
    const url = '/api/aps/heat-plan/plans-by-ponos'
    return request(url, {
      method: 'delete',
      params: query
    })
  }

  static async changeStatus(body: HeatPlanChangeStatusInput) {
    const url = '/api/aps/heat-plan/change-status'
    return request(url, {
      method: 'post',
      data: body
    })
  }

  static async changeShiftFlag(body: HeatPlanChangeShiftFlagInput) {
    const url = '/api/aps/heat-plan/change-shift-flag'
    return request(url, {
      method: 'post',
      data: body
    })
  }

  static async changeTundishFlag(body: HeatPlanChangeTundishFlagInput) {
    const url = '/api/aps/heat-plan/change-tundish-flag'
    return request(url, {
      method: 'post',
      data: body
    })
  }

  static async latest(body: HeatPlanLatestQueryDto) {
    const url = '/api/aps/heat-plan/latest'
    return request<HeatPlanSimpleDtoListResultDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async get(id: string) {
    const url = `/api/aps/heat-plan/${id}`
    return request<HeatPlanDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: {
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
  }) {
    const url = '/api/aps/heat-plan'
    return request<HeatPlanDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
