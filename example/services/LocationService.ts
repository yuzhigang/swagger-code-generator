import request from '@/utils/request'
import type { LocationDto, CreateLocationDto, LocationDtoPagedResultDto, UpdateLocationDto } from './definitions'

export interface GetListQueryDto {
  name?: string
  parentId?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class LocationService {
  static async create(input: CreateLocationDto) {
    const url = '/api/gateway/location'
    return request<LocationDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/gateway/location'
    return request<LocationDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: UpdateLocationDto) {
    const url = `/api/gateway/location/${id}`
    return request<LocationDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/gateway/location/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/gateway/location/${id}`
    return request<LocationDto>(url, {
      method: 'get'
    })
  }
}
