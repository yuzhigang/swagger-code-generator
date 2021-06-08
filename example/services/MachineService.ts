import request from '@/utils/request'
import { MachineDto, SaveMachineDto, MachineDtoPagedResultDto } from './definitions'

export default class MachineService {
  static async create(body: SaveMachineDto) {
    const url = '/api/aps/machine'
    return request<MachineDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    name?: string
    shortName?: string
    code?: string
    process?: string
    isActive?: boolean
    isMain?: boolean
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/aps/machine'
    return request<MachineDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: SaveMachineDto) {
    const url = `/api/aps/machine/${id}`
    return request<MachineDto>(url, {
      method: 'put',
      data: body
    })
  }

  static async delete(id: string) {
    const url = `/api/aps/machine/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/aps/machine/${id}`
    return request<MachineDto>(url, {
      method: 'get'
    })
  }
}
