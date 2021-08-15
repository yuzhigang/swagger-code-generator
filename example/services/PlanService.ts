import request from '@/utils/request'
import { PlanDto, SavePlanDto, PlanDtoPagedResultDto, PlanQueryDto } from './definitions'

export default class PlanService {
  static async create(input: SavePlanDto) {
    const url = '/api/app/plan'
    return request<PlanDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: PlanQueryDto) {
    const url = '/api/app/plan'
    return request<PlanDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SavePlanDto) {
    const url = `/api/app/plan/${id}`
    return request<PlanDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/app/plan/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/app/plan/${id}`
    return request<PlanDto>(url, {
      method: 'get'
    })
  }
}
