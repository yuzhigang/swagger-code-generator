import request from '@/utils/request'
import type { NodeTypeDto, CreateNodeTypeDto, NodeTypeDtoPagedResultDto, UpdateNodeTypeDto } from './definitions'

export interface NodeTypeGetListQuery {
  key?: string
  code?: string
  name?: string
  category?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class NodeTypeService {
  static async create(input: CreateNodeTypeDto) {
    const url = '/api/nodes/node-type'
    return request<NodeTypeDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: NodeTypeGetListQuery) {
    const url = '/api/nodes/node-type'
    return request<NodeTypeDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: UpdateNodeTypeDto) {
    const url = `/api/nodes/node-type/${id}`
    return request<NodeTypeDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/nodes/node-type/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/nodes/node-type/${id}`
    return request<NodeTypeDto>(url, {
      method: 'get'
    })
  }
}
