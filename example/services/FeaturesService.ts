import request from '@/utils/request'
import type { GetFeatureListResultDto, UpdateFeaturesDto } from './definitions'

export interface GetQueryDto {
  providerName?: string
  providerKey?: string
}
export interface UpdateQueryDto {
  providerName?: string
  providerKey?: string
}
export default class FeaturesService {
  static async get(query: GetQueryDto) {
    const url = '/api/feature-management/features'
    return request<GetFeatureListResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(query: UpdateQueryDto, input: UpdateFeaturesDto) {
    const url = '/api/feature-management/features'
    return request(url, {
      method: 'put',
      params: query,
      data: input
    })
  }
}
