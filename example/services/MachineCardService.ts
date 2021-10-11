import request from '@/utils/request'
import type { MachineCardDto, SaveMachineCardDto, MachineCardDtoPagedResultDto } from './definitions'

export interface GetListQueryDto {
  name?: string
  shortName?: string
  code?: string
  process?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class MachineCardService {
  static async create(input: SaveMachineCardDto) {
    const url = '/api/aps/machine-card'
    return request<MachineCardDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/aps/machine-card'
    return request<MachineCardDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveMachineCardDto) {
    const url = `/api/aps/machine-card/${id}`
    return request<MachineCardDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/aps/machine-card/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/aps/machine-card/${id}`
    return request<MachineCardDto>(url, {
      method: 'get'
    })
  }
}
