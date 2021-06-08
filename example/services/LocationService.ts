import request from '@/utils/request'
import { LocationDto, CreateLocationDto, LocationDtoPagedResultDto, UpdateLocationDto } from './definitions'

export default class LocationService {
  static async create(body: CreateLocationDto) {
    const url = '/api/gateway/location'
    return request<LocationDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    name?: string
    parentId?: string
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/gateway/location'
    return request<LocationDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: UpdateLocationDto) {
    const url = `/api/gateway/location/${id}`
    return request<LocationDto>(url, {
      method: 'put',
      data: body
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
