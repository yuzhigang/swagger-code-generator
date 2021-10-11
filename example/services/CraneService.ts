import request from '@/utils/request'
import type { CraneDto, SaveCraneDto, CraneDtoPagedResultDto } from './definitions'

export interface GetListQueryDto {
  kind?: 'Crane' | 'Trolley'
  isActive?: boolean
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class CraneService {
  static async create(input: SaveCraneDto) {
    const url = '/api/lms/crane'
    return request<CraneDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/lms/crane'
    return request<CraneDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveCraneDto) {
    const url = `/api/lms/crane/${id}`
    return request<CraneDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/lms/crane/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/lms/crane/${id}`
    return request<CraneDto>(url, {
      method: 'get'
    })
  }
}
