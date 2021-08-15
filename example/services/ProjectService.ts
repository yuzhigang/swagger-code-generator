import request from '@/utils/request'
import { ProjectDto, SaveProjectDto, ProjectDtoPagedResultDto, ProjectQueryDto } from './definitions'

export default class ProjectService {
  static async create(input: SaveProjectDto) {
    const url = '/api/app/project'
    return request<ProjectDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: ProjectQueryDto) {
    const url = '/api/app/project'
    return request<ProjectDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveProjectDto) {
    const url = `/api/app/project/${id}`
    return request<ProjectDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/app/project/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/app/project/${id}`
    return request<ProjectDto>(url, {
      method: 'get'
    })
  }
}
