import request from '@/utils/request'
import {
  MasterProductionPlanDto,
  SaveMasterProductionPlanDto,
  MasterProductionPlanDtoPagedResultDto
} from './definitions'

export default class MasterProductionPlanService {
  static async save(body: SaveMasterProductionPlanDto) {
    const url = '/api/aps/master-production-plan/save'
    return request<MasterProductionPlanDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async create(body: SaveMasterProductionPlanDto) {
    const url = '/api/aps/master-production-plan'
    return request<MasterProductionPlanDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    msc?: string
    castId?: string
    steelType?: string
    planStart?: string
    planEnd?: string
    isActive?: boolean
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/aps/master-production-plan'
    return request<MasterProductionPlanDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: SaveMasterProductionPlanDto) {
    const url = `/api/aps/master-production-plan/${id}`
    return request<MasterProductionPlanDto>(url, {
      method: 'put',
      data: body
    })
  }

  static async delete(id: string) {
    const url = `/api/aps/master-production-plan/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/aps/master-production-plan/${id}`
    return request<MasterProductionPlanDto>(url, {
      method: 'get'
    })
  }
}
