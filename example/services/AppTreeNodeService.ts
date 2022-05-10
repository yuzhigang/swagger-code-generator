import request from '@/utils/request'
import type {
  AppTreeDto,
  AppTreeNodeDto,
  CreateAppTreeNodeDto,
  AppTreeNodeDtoPagedResultDto,
  UpdateAppTreeNodeDto
} from './definitions'

export interface AppTreeNodeGetTreeQuery {
  application?: string
  parentId?: string
}
export interface AppTreeNodeGetListQuery {
  application?: string
  parentId?: string
}
export default class AppTreeNodeService {
  static async getTree(query: AppTreeNodeGetTreeQuery) {
    const url = '/api/tree/app-tree-node/tree'
    return request<AppTreeDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async create(input: CreateAppTreeNodeDto) {
    const url = '/api/tree/app-tree-node'
    return request<AppTreeNodeDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: AppTreeNodeGetListQuery) {
    const url = '/api/tree/app-tree-node'
    return request<AppTreeNodeDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: UpdateAppTreeNodeDto) {
    const url = `/api/tree/app-tree-node/${id}`
    return request<AppTreeNodeDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/tree/app-tree-node/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/tree/app-tree-node/${id}`
    return request<AppTreeNodeDto>(url, {
      method: 'get'
    })
  }
}
