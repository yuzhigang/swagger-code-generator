import request from '@/utils/request'
import { DataFileDto, SaveDataFileDto, DataFileDtoPagedResultDto, DataFileQueryDto } from './definitions'

export default class DataFileService {
  static async create(input: SaveDataFileDto) {
    const url = '/api/app/data-file'
    return request<DataFileDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: DataFileQueryDto) {
    const url = '/api/app/data-file'
    return request<DataFileDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveDataFileDto) {
    const url = `/api/app/data-file/${id}`
    return request<DataFileDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/app/data-file/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/app/data-file/${id}`
    return request<DataFileDto>(url, {
      method: 'get'
    })
  }
}
