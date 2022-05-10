import request from '@/utils/request'
import type {
  TimeValueDto,
  AggregateType,
  TagValueAggrMeasurementDto,
  RankValueDto,
  GetAccFlowStatisticDto
} from './definitions'

export interface MeasurementGetAggregateFlowsQuery {
  start?: string
  end?: string
  count?: number
  nodeId?: string
  nodeIds?: string[]
  aggregateType?: AggregateType
}
export interface MeasurementGetFlowsQuery {
  start?: string
  end?: string
  nodeId?: string
  aggregateType?: AggregateType
}
export interface MeasurementGetRealFlowsQuery {
  start?: string
  end?: string
  nodeIds?: string[]
  aggregateType?: AggregateType
}
export interface MeasurementGetFlowUsedByDayQuery {
  nodeId?: string
  start?: string
  end?: string
}
export interface MeasurementGetFlowUsedByDayCountQuery {
  nodeId?: string
  count?: number
}
export interface MeasurementGetFlowUsedByMonthQuery {
  nodeId?: string
  start?: string
  end?: string
}
export interface MeasurementGetFlowUsedByMonthCountQuery {
  nodeId?: string
  count?: number
}
export interface MeasurementGetFlowUsedByWeekCountQuery {
  nodeId?: string
  count?: number
}
export interface MeasurementGetFlowUsedRankQuery {
  date?: string
  topN?: number
  asc?: boolean
  aggregateType?: AggregateType
}
export default class MeasurementService {
  static async getAggregateFlows(query: MeasurementGetAggregateFlowsQuery) {
    const url = '/api/ems/measurement/aggregate-flows'
    return request<TimeValueDto[]>(url, {
      method: 'get',
      params: query
    })
  }

  static async getFlows(query: MeasurementGetFlowsQuery) {
    const url = '/api/ems/measurement/flows'
    return request<TimeValueDto[]>(url, {
      method: 'get',
      params: query
    })
  }

  static async getRealFlows(query: MeasurementGetRealFlowsQuery) {
    const url = '/api/ems/measurement/real-flows'
    return request<TagValueAggrMeasurementDto[]>(url, {
      method: 'get',
      params: query
    })
  }

  static async getFlowUsedByDay(query: MeasurementGetFlowUsedByDayQuery) {
    const url = '/api/ems/measurement/flow-used-by-day'
    return request<TimeValueDto[]>(url, {
      method: 'get',
      params: query
    })
  }

  static async getFlowUsedByDayCount(query: MeasurementGetFlowUsedByDayCountQuery) {
    const url = '/api/ems/measurement/flow-used-by-day-count'
    return request<TimeValueDto[]>(url, {
      method: 'get',
      params: query
    })
  }

  static async getFlowUsedByMonth(query: MeasurementGetFlowUsedByMonthQuery) {
    const url = '/api/ems/measurement/flow-used-by-month'
    return request<TimeValueDto[]>(url, {
      method: 'get',
      params: query
    })
  }

  static async getFlowUsedByMonthCount(query: MeasurementGetFlowUsedByMonthCountQuery) {
    const url = '/api/ems/measurement/flow-used-by-month-count'
    return request<TimeValueDto[]>(url, {
      method: 'get',
      params: query
    })
  }

  static async getFlowUsedByWeekCount(query: MeasurementGetFlowUsedByWeekCountQuery) {
    const url = '/api/ems/measurement/flow-used-by-week-count'
    return request<TimeValueDto[]>(url, {
      method: 'get',
      params: query
    })
  }

  static async getFlowUsedRank(query: MeasurementGetFlowUsedRankQuery) {
    const url = '/api/ems/measurement/flow-used-rank'
    return request<RankValueDto[]>(url, {
      method: 'get',
      params: query
    })
  }

  static async getFlowUsedStatistic() {
    const url = '/api/ems/measurement/flow-used-statistic'
    return request<GetAccFlowStatisticDto>(url, {
      method: 'get'
    })
  }
}
