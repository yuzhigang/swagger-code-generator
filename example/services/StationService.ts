import request from '@/utils/request'
import { StationDto, SaveStationDto, StationDtoPagedResultDto, StationQueryDto } from './definitions'

export default class StationService {
  static async create(input: SaveStationDto) {
    const url = '/api/app/station'
    return request<StationDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: StationQueryDto) {
    const url = '/api/app/station'
    return request<StationDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveStationDto) {
    const url = `/api/app/station/${id}`
    return request<StationDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/app/station/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/app/station/${id}`
    return request<StationDto>(url, {
      method: 'get'
    })
  }
}
