import request from '@/utils/request'
import type { GetFeatureListResultDto, UpdateFeaturesDto } from './definitions'

export interface FeaturesGetQuery {
  providerName?: string
  providerKey?: string
}
export interface FeaturesUpdateQuery {
  providerName?: string
  providerKey?: string
}
export default class FeaturesService {
  static async get(query: FeaturesGetQuery) {
    const url = '/api/feature-management/features'
    return request<GetFeatureListResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(query: FeaturesUpdateQuery, input: UpdateFeaturesDto) {
    const url = '/api/feature-management/features'
    return request(url, {
      method: 'put',
      params: query,
      data: input
    })
  }
}
