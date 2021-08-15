import request from '@/utils/request'
import {
  AnalysisReportDto,
  SaveAnalysisReportDto,
  AnalysisReportDtoPagedResultDto,
  AnalysisReportQueryDto
} from './definitions'

export default class AnalysisReportService {
  static async create(input: SaveAnalysisReportDto) {
    const url = '/api/app/analysis-report'
    return request<AnalysisReportDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async getList(query: AnalysisReportQueryDto) {
    const url = '/api/app/analysis-report'
    return request<AnalysisReportDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(id: string, input: SaveAnalysisReportDto) {
    const url = `/api/app/analysis-report/${id}`
    return request<AnalysisReportDto>(url, {
      method: 'put',
      data: input
    })
  }

  static async delete(id: string) {
    const url = `/api/app/analysis-report/${id}`
    return request(url, {
      method: 'delete'
    })
  }

  static async get(id: string) {
    const url = `/api/app/analysis-report/${id}`
    return request<AnalysisReportDto>(url, {
      method: 'get'
    })
  }
}
