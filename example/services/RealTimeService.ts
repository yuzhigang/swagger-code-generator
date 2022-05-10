import request from '@/utils/request'
import type { TagRealMeasurementDto, GetRealFlowsItemDto, TimeValueDto } from './definitions'

export interface RealTimeGetRealValuesQuery {
  nodeId?: string
  propertyCodes?: string[]
  start?: string
  end?: string
}
export default class RealTimeService {
  static async getCurrentValues() {
    const url = '/api/ems/real-time/current-values'
    return request<TagRealMeasurementDto[]>(url, {
      method: 'get'
    })
  }

  static async getRealFlows() {
    const url = '/api/ems/real-time/real-flows'
    return request<GetRealFlowsItemDto[]>(url, {
      method: 'get'
    })
  }

  static async getRealValues(query: RealTimeGetRealValuesQuery) {
    const url = '/api/ems/real-time/real-values'
    return request<TimeValueDto[]>(url, {
      method: 'get',
      params: query
    })
  }
}
