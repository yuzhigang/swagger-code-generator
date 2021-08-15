import request from '@/utils/request'
import { DeviceDto, SaveDeviceDto, DeviceDtoPagedResultDto, DeviceQueryDto } from './definitions'

export default class DeviceService {
  static async create(input: SaveDeviceDto) {
    const url = '/api/app/device'
    return request<DeviceDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: DeviceQueryDto) {
    const url = '/api/app/device'
    return request<DeviceDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveDeviceDto) {
    const url = `/api/app/device/${id}`
    return request<DeviceDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/app/device/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/app/device/${id}`
    return request<DeviceDto>(url, {
      method: 'get'
    })
  }
}
