import request from '@/utils/request'
import { AlarmReportDto, SaveAlarmReportDto, AlarmReportDtoPagedResultDto, AlarmReportQueryDto } from './definitions'

export default class AlarmReportService {
  static async create(input: SaveAlarmReportDto) {
    const url = '/api/app/alarm-report'
    return request<AlarmReportDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: AlarmReportQueryDto) {
    const url = '/api/app/alarm-report'
    return request<AlarmReportDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveAlarmReportDto) {
    const url = `/api/app/alarm-report/${id}`
    return request<AlarmReportDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/app/alarm-report/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/app/alarm-report/${id}`
    return request<AlarmReportDto>(url, {
      method: 'get'
    })
  }
}
