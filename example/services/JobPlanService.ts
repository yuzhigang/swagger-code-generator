import request from '@/utils/request'
import type {
  JobPlanDtoPagedResultDto,
  SaveJobPlansInput,
  SwapJobPlansInput,
  JobPlanDto,
  StartJobPlanInput,
  FinishJobPlanInput
} from './definitions'

export interface GetTestQueryDto {
  heatNo?: string
  machine?: string
  process?: string
  status?: 'NotStarted' | 'Processing' | 'Completed' | 'None'
  start?: string
  end?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export interface GetListQueryDto {
  heatNo?: string
  machine?: string
  process?: string
  status?: 'NotStarted' | 'Processing' | 'Completed' | 'None'
  start?: string
  end?: string
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class JobPlanService {
  static async getTest(query: GetTestQueryDto) {
    const url = '/api/abp/job-plans'
    return request<JobPlanDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async saveJobPlans(input: SaveJobPlansInput) {
    const url = '/api/aps/job-plan/save-job-plans'
    return request(url, {
      method: 'post',
      data: input
    })
  }

  static async swapJobPlans(input: SwapJobPlansInput) {
    const url = '/api/aps/job-plan/swap-job-plans'
    return request(url, {
      method: 'post',
      data: input
    })
  }

  static async startJobPlan(input: StartJobPlanInput) {
    const url = '/api/aps/job-plan/start-job-plan'
    return request<JobPlanDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async finishJobPlan(input: FinishJobPlanInput) {
    const url = '/api/aps/job-plan/finish-job-plan'
    return request<JobPlanDto>(url, {
      method: 'post',
      data: input
    })
  }

  static async get(id: string) {
    const url = `/api/aps/job-plan/${id}`
    return request<JobPlanDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: GetListQueryDto) {
    const url = '/api/aps/job-plan'
    return request<JobPlanDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
