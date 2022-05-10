import request from '@/utils/request'
import type { DashboardStatistic } from './definitions'

export default class DashboardService {
  static async getStatistic() {
    const url = '/api/gateways/dashboard/statistic'
    return request<DashboardStatistic>(url, {
      method: 'get'
    })
  }
}
