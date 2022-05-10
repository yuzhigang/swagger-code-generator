import request from '@/utils/request'
import type {
  NodePropertyDto,
  CreateNodePropertyDto,
  NodePropertyDtoPagedResultDto,
  UpdateNodePropertyDto
} from './definitions'

export interface NodePropertyGetMeasureNodesQuery {
  propertCode?: string
  nodeId?: string
}
export interface NodePropertyGetListQuery {
  propertyCode?: string
  deviceIds?: string[]
  nodeIds?: string[]
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class NodePropertyService {
  static async getMeasureNodes(query: NodePropertyGetMeasureNodesQuery) {
    const url = '/api/ems/node-property/measure-nodes'
    return request<NodePropertyDto[]>(url, {
      method: 'get',
      params: query
    })
  }

  static async find(nodeId: string, propertyCode: string) {
    const url = `/api/ems/node-property/${nodeId}/${propertyCode}/find`
    return request<NodePropertyDto>(url, {
      method: 'post'
    })
  }

  static async create(input: CreateNodePropertyDto) {
    const url = '/api/ems/node-property'
    return request<NodePropertyDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: NodePropertyGetListQuery) {
    const url = '/api/ems/node-property'
    return request<NodePropertyDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(nodeId: string, propertyCode: string, input: UpdateNodePropertyDto) {
    const url = `/api/ems/node-property/${nodeId}/${propertyCode}`
    return request<NodePropertyDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(nodeId: string, propertyCode: string) {
    const url = `/api/ems/node-property/${nodeId}/${propertyCode}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(nodeId: string, propertyCode: string) {
    const url = `/api/ems/node-property/${nodeId}/${propertyCode}`
    return request<NodePropertyDto>(url, {
      method: 'get'
    })
  }
}
