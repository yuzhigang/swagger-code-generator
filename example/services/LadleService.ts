import request from '@/utils/request'
import { ConfigLadleInput, LadleDto, CreateLadleDto, LadleDtoPagedResultDto, UpdateLadleDto } from './definitions'

export default class LadleService {
  static async configLadle(body: ConfigLadleInput) {
    const url = '/api/lms/ladle/config-ladle'
    return request(url, {
      method: 'post',
      data: body
    })
  }

  static async create(body: CreateLadleDto) {
    const url = '/api/lms/ladle'
    return request<LadleDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: { isActive?: boolean; sorting?: string; skipCount?: number; maxResultCount?: number }) {
    const url = '/api/lms/ladle'
    return request<LadleDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: UpdateLadleDto) {
    const url = `/api/lms/ladle/${id}`
    return request<LadleDto>(url, {
      method: 'put',
      data: body
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
