import request from '@/utils/request'
import type {
  NodeMaterialTypeDtoPagedResultDto,
  NodeDto,
  CreateNodeMaterialTypeDto,
  UpdateNodeMaterialTypeDto,
  CreateNodeDto,
  NodeDtoPagedResultDto,
  UpdateNodeDto
} from './definitions'

export interface NodeGetNodeMaterialTypesQuery {
  nodeId?: string
  materialTypeId?: string
  key?: string
  flowType?: string
  type?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export interface NodeGetListQuery {
  name?: string
  key?: string
  parentId?: string
  includeNodeType?: boolean
  includeNodeMaterialTypes?: boolean
  ids?: string[]
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class NodeService {
  static async getNodeMaterialTypes(query: NodeGetNodeMaterialTypesQuery) {
    const url = '/api/nodes/node/node-material-types'
    return request<NodeMaterialTypeDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async addMaterialType(input: CreateNodeMaterialTypeDto) {
    const url = '/api/nodes/node/material-type'
    return request<NodeDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async updateMaterialType(input: UpdateNodeMaterialTypeDto) {
    const url = '/api/nodes/node/material-type'
    return request<NodeDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async create(input: CreateNodeDto) {
    const url = '/api/nodes/node'
    return request<NodeDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: NodeGetListQuery) {
    const url = '/api/nodes/node'
    return request<NodeDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: UpdateNodeDto) {
    const url = `/api/nodes/node/${id}`
    return request<NodeDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/nodes/node/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/nodes/node/${id}`
    return request<NodeDto>(url, {
      method: 'get'
    })
  }
}
