import request from '@/utils/request'
import type { MachineDto, SaveMachineDto, MachineDtoPagedResultDto } from './definitions'

export interface GetListQueryDto {
  name?: string
  shortName?: string
  code?: string
  process?: string
  isActive?: boolean
  isMain?: boolean
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class MachineService {
  static async create(input: SaveMachineDto) {
    const url = '/api/aps/machine'
    return request<MachineDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/aps/machine'
    return request<MachineDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveMachineDto) {
    const url = `/api/aps/machine/${id}`
    return request<MachineDto>(url, {
      method: 'put',
      data: input
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
