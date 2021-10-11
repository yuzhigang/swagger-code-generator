import request from '@/utils/request'
import type { AuditLogDtoPagedResultDto, AuditLogDto } from './definitions'

export interface GetListQueryDto {
  start?: string
  end?: string
  httpMethod?: string
  hasException?: boolean
  userName?: string
  httpStatusCode?:
    | 'Continue'
    | 'SwitchingProtocols'
    | 'Processing'
    | 'EarlyHints'
    | 'OK'
    | 'Created'
    | 'Accepted'
    | 'NonAuthoritativeInformation'
    | 'NoContent'
    | 'ResetContent'
    | 'PartialContent'
    | 'MultiStatus'
    | 'AlreadyReported'
    | 'IMUsed'
    | 'MultipleChoices'
    | 'MovedPermanently'
    | 'Found'
    | 'SeeOther'
    | 'NotModified'
    | 'UseProxy'
    | 'Unused'
    | 'TemporaryRedirect'
    | 'PermanentRedirect'
    | 'BadRequest'
    | 'Unauthorized'
    | 'PaymentRequired'
    | 'Forbidden'
    | 'NotFound'
    | 'MethodNotAllowed'
    | 'NotAcceptable'
    | 'ProxyAuthenticationRequired'
    | 'RequestTimeout'
    | 'Conflict'
    | 'Gone'
    | 'LengthRequired'
    | 'PreconditionFailed'
    | 'RequestEntityTooLarge'
    | 'RequestUriTooLong'
    | 'UnsupportedMediaType'
    | 'RequestedRangeNotSatisfiable'
    | 'ExpectationFailed'
    | 'MisdirectedRequest'
    | 'UnprocessableEntity'
    | 'Locked'
    | 'FailedDependency'
    | 'UpgradeRequired'
    | 'PreconditionRequired'
    | 'TooManyRequests'
    | 'RequestHeaderFieldsTooLarge'
    | 'UnavailableForLegalReasons'
    | 'InternalServerError'
    | 'NotImplemented'
    | 'BadGateway'
    | 'ServiceUnavailable'
    | 'GatewayTimeout'
    | 'HttpVersionNotSupported'
    | 'VariantAlsoNegotiates'
    | 'InsufficientStorage'
    | 'LoopDetected'
    | 'NotExtended'
    | 'NetworkAuthenticationRequired'
  includeDetails?: boolean
  sorting?: string
  skipCount?: number
  maxResultCount?: number
}
export default class AuditLogService {
  static async getList(query: GetListQueryDto) {
    const url = '/api/app/audit-log'
    return request<AuditLogDtoPagedResultDto>(url, {
      method: 'get',
      params: query
    })
  }

  static async get(id: string) {
    const url = `/api/app/audit-log/${id}`
    return request<AuditLogDto>(url, {
      method: 'get'
    })
  }
}
