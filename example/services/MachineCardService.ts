import request from '@/utils/request'
import { MachineCardDto, SaveMachineCardDto, MachineCardDtoPagedResultDto } from './definitions'

export default class MachineCardService {
  static async create(body: SaveMachineCardDto) {
    const url = '/api/aps/machine-card'
    return request<MachineCardDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async getList(query: {
    name?: string
    shortName?: string
    code?: string
    process?: string
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/aps/machine-card'
    return request<MachineCardDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, body: SaveMachineCardDto) {
    const url = `/api/aps/machine-card/${id}`
    return request<MachineCardDto>(url, {
      method: 'put',
      data: body
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
