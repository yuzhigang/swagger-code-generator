import request from '@/utils/request'
import type {
  MasterProductionPlanDto,
  SaveMasterProductionPlanDto,
  MasterProductionPlanDtoPagedResultDto
} from './definitions'

export interface GetListQueryDto {
  msc?: string
  castId?: string
  steelType?: string
  planStart?: string
  planEnd?: string
  isActive?: boolean
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class MasterProductionPlanService {
  static async save(input: SaveMasterProductionPlanDto) {
    const url = '/api/aps/master-production-plan/save'
    return request<MasterProductionPlanDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async create(input: SaveMasterProductionPlanDto) {
    const url = '/api/aps/master-production-plan'
    return request<MasterProductionPlanDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/aps/master-production-plan'
    return request<MasterProductionPlanDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveMasterProductionPlanDto) {
    const url = `/api/aps/master-production-plan/${id}`
    return request<MasterProductionPlanDto>(url, {
      method: 'put',
      data: input
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
