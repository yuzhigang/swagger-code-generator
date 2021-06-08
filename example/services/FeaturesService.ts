import request from '@/utils/request'
import { GetFeatureListResultDto, UpdateFeaturesDto } from './definitions'

export default class FeaturesService {
  static async get(query: { providerName?: string; providerKey?: string }) {
    const url = '/api/feature-management/features'
    return request<GetFeatureListResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async update(query: { providerName?: string; providerKey?: string }, body: UpdateFeaturesDto) {
    const url = '/api/feature-management/features'
    return request(url, {
      method: 'put',
      params: query,
      data: body
    })
  }
}
