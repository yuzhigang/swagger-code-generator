import request from '@/utils/request'
import type { ConfigLadleInput, LadleDto, CreateLadleDto, LadleDtoPagedResultDto, UpdateLadleDto } from './definitions'

export interface GetListQueryDto {
  isActive?: boolean
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class LadleService {
  static async configLadle(input: ConfigLadleInput) {
    const url = '/api/lms/ladle/config-ladle'
    return request(url, {
      method: 'post',
      data: input
    })
  }

  static async create(input: CreateLadleDto) {
    const url = '/api/lms/ladle'
    return request<LadleDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/lms/ladle'
    return request<LadleDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: UpdateLadleDto) {
    const url = `/api/lms/ladle/${id}`
    return request<LadleDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/lms/ladle/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/lms/ladle/${id}`
    return request<LadleDto>(url, {
      method: 'get'
    })
  }
}
