import request from '@/utils/request'
import {
  JobPlanDtoPagedResultDto,
  SaveJobPlansInput,
  SwapJobPlansInput,
  JobPlanDto,
  StartJobPlanInput,
  FinishJobPlanInput
} from './definitions'

export default class JobPlanService {
  static async getTest(query: {
    heatNo?: string
    machine?: string
    process?: string
    status?: 'NotStarted' | 'Processing' | 'Completed' | 'None'
    start?: string
    end?: string
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/abp/job-plans'
    return request<JobPlanDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async saveJobPlans(body: SaveJobPlansInput) {
    const url = '/api/aps/job-plan/save-job-plans'
    return request(url, {
      method: 'post',
      data: body
    })
  }

  static async swapJobPlans(body: SwapJobPlansInput) {
    const url = '/api/aps/job-plan/swap-job-plans'
    return request(url, {
      method: 'post',
      data: body
    })
  }

  static async startJobPlan(body: StartJobPlanInput) {
    const url = '/api/aps/job-plan/start-job-plan'
    return request<JobPlanDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async finishJobPlan(body: FinishJobPlanInput) {
    const url = '/api/aps/job-plan/finish-job-plan'
    return request<JobPlanDto>(url, {
      method: 'post',
      data: body
    })
  }

  static async get(id: string) {
    const url = `/api/aps/job-plan/${id}`
    return request<JobPlanDto>(url, {
      method: 'get'
    })
  }

  static async getList(query: {
    heatNo?: string
    machine?: string
    process?: string
    status?: 'NotStarted' | 'Processing' | 'Completed' | 'None'
    start?: string
    end?: string
    sorting?: string
    skipCount?: number
    maxResultCount?: number
  }) {
    const url = '/api/aps/job-plan'
    return request<JobPlanDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }
}
