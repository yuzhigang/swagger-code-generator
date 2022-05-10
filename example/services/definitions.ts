export interface AbpLoginResult {
  result?: LoginResultType
  description: string
}

export interface ActionApiDescriptionModel {
  uniqueName: string
  name: string
  httpMethod: string
  url: string
  supportedVersions: string[]
  parametersOnMethod: MethodParameterApiDescriptionModel[]
  parameters: ParameterApiDescriptionModel[]
  returnValue?: ReturnValueApiDescriptionModel
  allowAnonymous?: boolean
  implementFrom: string
}

export interface AddDriverTagDto {
  tagId: string
  address: string
  remark: string
}

export type AggregateType = 'Hour' | 'Shift' | 'Day' | 'Week' | 'Month' | 'Season' | 'Year'

export interface ApplicationApiDescriptionModel {
  modules?: {}
  types?: {}
}

export interface ApplicationAuthConfigurationDto {
  policies?: {}
  grantedPolicies?: {}
}

export interface ApplicationConfigurationDto {
  localization?: ApplicationLocalizationConfigurationDto
  auth?: ApplicationAuthConfigurationDto
  setting?: ApplicationSettingConfigurationDto
  currentUser?: CurrentUserDto
  features?: ApplicationFeatureConfigurationDto
  multiTenancy?: MultiTenancyInfoDto
  currentTenant?: CurrentTenantDto
  timing?: TimingDto
  clock?: ClockDto
  objectExtensions?: ObjectExtensionsDto
}

export interface ApplicationFeatureConfigurationDto {
  values?: {}
}

export interface ApplicationLocalizationConfigurationDto {
  values?: {}
  languages: LanguageInfo[]
  currentCulture?: CurrentCultureDto
  defaultResourceName: string
  languagesMap?: {}
  languageFilesMap?: {}
}

export interface ApplicationSettingConfigurationDto {
  values?: {}
}

export interface AppTreeDto {
  application: string
  count: number
  nodes: AppTreeNodeDto[]
}

export interface AppTreeNodeDto {
  extraProperties?: {}
  id: string
  displayName: string
  code: string
  level: number
  parentId?: string
  isRoot: boolean
  isLeaf: boolean
  application: string
  rank: number
  icon: string
  entityId: string
  entityType: string
  children: AppTreeNodeDto[]
}

export interface AppTreeNodeDtoPagedResultDto {
  items: AppTreeNodeDto[]
  totalCount: number
}

export interface BackgroundWorkerInstanceDto {
  id: string
  remark: string
  status: number
  entityType: string
  entityId: string
  assemblyName: string
  cronExpression: string
  jsonArgs: string
  startTime?: string
  lastStopTime?: string
  totalStartCount: number
  lastRunTime?: string
  lastRunSeconds: number
  nextRunTime?: string
  totalRunCount: number
  totalFailureCount: number
}

export interface BackgroundWorkerInstanceDtoPagedResultDto {
  items: BackgroundWorkerInstanceDto[]
  totalCount: number
}

export interface BackgroundWorkerLogDto {
  id: string
  instanceId: string
  runSeconds: number
  category?: LogLevel
  message: string
  stackTrace: string
  creationTime: string
}

export interface BackgroundWorkerLogDtoPagedResultDto {
  items: BackgroundWorkerLogDto[]
  totalCount: number
}

export interface ChangePasswordInput {
  currentPassword: string
  newPassword: string
}

export type ChannelType = 'Network' | 'SerialPort' | 'Database'

export interface ClockDto {
  kind: string
}

export interface ControllerApiDescriptionModel {
  controllerName: string
  controllerGroupName: string
  isRemoteService: boolean
  apiVersion: string
  type: string
  interfaces: ControllerInterfaceApiDescriptionModel[]
  actions?: {}
}

export interface ControllerInterfaceApiDescriptionModel {
  type: string
}

export interface CreateAppTreeNodeDto {
  application: string
  parentId?: string
  entityId: string
  entityType: string
  displayName: string
  icon: string
  rank: number
}

export interface CreateDeviceDto {
  code: string
  name: string
  remark: string
  rank: number
  locationId?: string
  parentId?: string
}

export interface CreateDriverDefinitionDto {}

export interface CreateDriverDto {
  name: string
  remark: string
  host: string
  port: string
  userName: string
  password: string
  driverDefinitionId: string
  interval?: number
  timeout?: number
  retryCount?: number
  settings?: {}
}

export interface CreateMaterialTypeDto {
  name: string
  code: string
  category: string
  remark: string
  rank: number
}

export interface CreateNodeDto {
  nodeTypeId?: string
  name: string
  remark: string
  rank: number
}

export interface CreateNodeMaterialTypeDto {
  materialTypeId: string
  nodeId: string
  nodeName: string
  name: string
  flowType: string
  remark: string
  rank: number
  type: string
  value: number
  maxValue?: number
  minValue?: number
  equipmentNumber: number
  singleValue?: number
}

export interface CreateNodePropertyDto {
  nodeId: string
  propertyCode: string
  tagId: string
}

export interface CreateNodeTypeDto {
  name: string
  category: string
  code: string
  remark: string
  rank: number
}

export interface CreatePropertyDefinitionDto {
  name: string
  remark: string
  category: string
  unit: string
  valueType: string
  source: string
}

export interface CreatePropertyDto {
  entityType: string
  entityId: string
  propertyDefinitionId: string
  isMain: boolean
  value: string
  maxValue?: number
  minValue?: number
}

export interface CreateTagDefinitionDto {
  code: string
  name: string
  remark: string
  unit: string
  scale?: number
  valueType?: TagValueType
  rank: number
  interval?: number
  readMode?: ReadMode
  parentId?: string
}

export interface CreateTagDto {
  id: string
  name: string
  interval?: number
  deviceId: string
  readMode?: ReadMode
  isActive: boolean
  remark: string
  rank: number
  expression: string
  tagType?: TagType
  tagDefinitionId?: string
}

export interface CurrentCultureDto {
  displayName: string
  englishName: string
  threeLetterIsoLanguageName: string
  twoLetterIsoLanguageName: string
  isRightToLeft: boolean
  cultureName: string
  name: string
  nativeName: string
  dateTimeFormat?: DateTimeFormatDto
}

export interface CurrentTenantDto {
  id?: string
  name: string
  isAvailable: boolean
}

export interface CurrentUserDto {
  isAuthenticated: boolean
  id?: string
  tenantId?: string
  impersonatorUserId?: string
  impersonatorTenantId?: string
  impersonatorUserName: string
  impersonatorTenantName: string
  userName: string
  name: string
  surName: string
  email: string
  emailVerified: boolean
  phoneNumber: string
  phoneNumberVerified: boolean
  roles: string[]
}

export interface DashboardStatistic {
  driver?: StatisticItem
  tag?: StatisticItem
  device?: StatisticItem
}

export interface DateTimeFormatDto {
  calendarAlgorithmType: string
  dateTimeFormatLong: string
  shortDatePattern: string
  fullDateTimePattern: string
  dateSeparator: string
  shortTimePattern: string
  longTimePattern: string
}

export interface DeviceDto {
  extraProperties?: {}
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  remark: string
  rank: number
  locationId?: string
  code: string
  isActive: boolean
  location?: LocationDto
  status?: DeviceStatus
  parent?: DeviceDto
  parentId?: string
  isGateway: boolean
  deviceKey: string
  ipAddress: string
  tags: TagDto[]
}

export interface DeviceDtoPagedResultDto {
  items: DeviceDto[]
  totalCount: number
}

export type DeviceStatus = 'Unknown' | 'Closed' | 'Normal' | 'Fault'

export interface DriverDefinitionDto {
  extraProperties?: {}
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  remark: string
  isActive: boolean
  rank: number
  assemblyName: string
  className: string
  category: string
  subcategory: string
  channelType?: ChannelType
  type: string
  usageType?: DriverUsageType
  workMode?: DriverWorkMode
}

export interface DriverDefinitionDtoPagedResultDto {
  items: DriverDefinitionDto[]
  totalCount: number
}

export interface DriverDto {
  extraProperties?: {}
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  remark: string
  isActive: boolean
  rank: number
  driverDefinitionId: string
  driverDefinition?: DriverDefinitionDto
  host: string
  port: string
  interval?: number
  timeout?: number
  retryCount?: number
  tags: TagDto[]
  runState?: DriverRunState
}

export interface DriverDtoPagedResultDto {
  items: DriverDto[]
  totalCount: number
}

export type DriverRunState = 'Stop' | 'Running' | 'Pause'

export type DriverUsageType = 'Reader' | 'Writer' | 'Store' | 'Publisher'

export type DriverWorkMode = 'Pull' | 'Listen'

export interface EmailSettingsDto {
  smtpHost: string
  smtpPort: number
  smtpUserName: string
  smtpPassword: string
  smtpDomain: string
  smtpEnableSsl: boolean
  smtpUseDefaultCredentials: boolean
  defaultFromAddress: string
  defaultFromDisplayName: string
}

export interface EntityExtensionDto {
  properties?: {}
  configuration?: {}
}

export interface ExtensionEnumDto {
  fields: ExtensionEnumFieldDto[]
  localizationResource: string
}

export interface ExtensionEnumFieldDto {
  name: string
  value?: any | null
}

export interface ExtensionPropertyApiCreateDto {
  isAvailable: boolean
}

export interface ExtensionPropertyApiDto {
  onGet?: ExtensionPropertyApiGetDto
  onCreate?: ExtensionPropertyApiCreateDto
  onUpdate?: ExtensionPropertyApiUpdateDto
}

export interface ExtensionPropertyApiGetDto {
  isAvailable: boolean
}

export interface ExtensionPropertyApiUpdateDto {
  isAvailable: boolean
}

export interface ExtensionPropertyAttributeDto {
  typeSimple: string
  config?: {}
}

export interface ExtensionPropertyDto {
  type: string
  typeSimple: string
  displayName?: LocalizableStringDto
  api?: ExtensionPropertyApiDto
  ui?: ExtensionPropertyUiDto
  attributes: ExtensionPropertyAttributeDto[]
  configuration?: {}
  defaultValue?: any | null
}

export interface ExtensionPropertyUiDto {
  onTable?: ExtensionPropertyUiTableDto
  onCreateForm?: ExtensionPropertyUiFormDto
  onEditForm?: ExtensionPropertyUiFormDto
  lookup?: ExtensionPropertyUiLookupDto
}

export interface ExtensionPropertyUiFormDto {
  isVisible: boolean
}

export interface ExtensionPropertyUiLookupDto {
  url: string
  resultListPropertyName: string
  displayPropertyName: string
  valuePropertyName: string
  filterParamName: string
}

export interface ExtensionPropertyUiTableDto {
  isVisible: boolean
}

export interface FeatureDto {
  name: string
  displayName: string
  value: string
  provider?: FeatureProviderDto
  description: string
  valueType?: IStringValueType
  depth: number
  parentName: string
}

export interface FeatureGroupDto {
  name: string
  displayName: string
  features: FeatureDto[]
}

export interface FeatureProviderDto {
  name: string
  key: string
}

export interface FindTenantResultDto {
  success: boolean
  tenantId?: string
  name: string
  isActive: boolean
}

export interface FreshKeyDto {
  deviceKey: string
  deviceId: string
}

export interface GetAccFlowStatisticDto {
  day?: GetAccFlowStatisticItemDto
  shift?: GetAccFlowStatisticItemDto
  week?: GetAccFlowStatisticItemDto
  month?: GetAccFlowStatisticItemDto
}

export interface GetAccFlowStatisticItemDto {
  current: number
  prev: number
  ratio: number
}

export interface GetFeatureListResultDto {
  groups: FeatureGroupDto[]
}

export interface GetPermissionListResultDto {
  entityDisplayName: string
  groups: PermissionGroupDto[]
}

export interface GetRealFlowsItemDto {
  source: string
  target: string
  value: number
}

export interface IanaTimeZone {
  timeZoneName: string
}

export interface IdentityRoleCreateDto {
  extraProperties?: {}
  name: string
  isDefault: boolean
  isPublic: boolean
}

export interface IdentityRoleDto {
  extraProperties?: {}
  id: string
  name: string
  isDefault: boolean
  isStatic: boolean
  isPublic: boolean
  concurrencyStamp: string
}

export interface IdentityRoleDtoListResultDto {
  items: IdentityRoleDto[]
}

export interface IdentityRoleDtoPagedResultDto {
  items: IdentityRoleDto[]
  totalCount: number
}

export interface IdentityRoleUpdateDto {
  extraProperties?: {}
  name: string
  isDefault: boolean
  isPublic: boolean
  concurrencyStamp: string
}

export interface IdentityUserCreateDto {
  extraProperties?: {}
  userName: string
  name: string
  surname: string
  email: string
  phoneNumber: string
  isActive: boolean
  lockoutEnabled: boolean
  roleNames: string[]
  password: string
}

export interface IdentityUserDto {
  extraProperties?: {}
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  isDeleted: boolean
  deleterId?: string
  deletionTime?: string
  tenantId?: string
  userName: string
  name: string
  surname: string
  email: string
  emailConfirmed: boolean
  phoneNumber: string
  phoneNumberConfirmed: boolean
  isActive: boolean
  lockoutEnabled: boolean
  lockoutEnd?: string
  concurrencyStamp: string
}

export interface IdentityUserDtoPagedResultDto {
  items: IdentityUserDto[]
  totalCount: number
}

export interface IdentityUserUpdateDto {
  extraProperties?: {}
  userName: string
  name: string
  surname: string
  email: string
  phoneNumber: string
  isActive: boolean
  lockoutEnabled: boolean
  roleNames: string[]
  password: string
  concurrencyStamp: string
}

export interface IdentityUserUpdateRolesDto {
  roleNames: string[]
}

export interface IStringValueType {
  name: string
  properties?: {}
  validator?: IValueValidator
}

export interface IValueValidator {
  name: string
  properties?: {}
}

export interface LanguageInfo {
  cultureName: string
  uiCultureName: string
  displayName: string
  flagIcon: string
}

export interface LocalizableStringDto {
  name: string
  resource: string
}

export interface LocationDto {
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  remark: string
  rank: number
  parent?: LocationDto
  parentId?: string
}

export type LoginResultType = 'Success' | 'InvalidUserNameOrPassword' | 'NotAllowed' | 'LockedOut' | 'RequiresTwoFactor'

export type LogLevel = 'Info' | 'Warn' | 'Error'

export interface MaterialTypeDto {
  extraProperties?: {}
  id: string
  name: string
  code: string
  category: string
  remark: string
  rank: number
  priority: number
  demand: number
}

export interface MaterialTypeDtoPagedResultDto {
  items: MaterialTypeDto[]
  totalCount: number
}

export interface MethodParameterApiDescriptionModel {
  name: string
  typeAsString: string
  type: string
  typeSimple: string
  isOptional: boolean
  defaultValue?: any | null
}

export interface ModuleApiDescriptionModel {
  rootPath: string
  remoteServiceName: string
  controllers?: {}
}

export interface ModuleExtensionDto {
  entities?: {}
  configuration?: {}
}

export interface MultiTenancyInfoDto {
  isEnabled: boolean
}

export interface NameValue {
  name: string
  value: string
}

export interface NodeDto {
  extraProperties?: {}
  id: string
  nodeTypeId?: string
  name: string
  remark: string
  nodeType?: NodeTypeDto
  rank: number
  materialTypes: NodeMaterialTypeDto[]
}

export interface NodeDtoPagedResultDto {
  items: NodeDto[]
  totalCount: number
}

export interface NodeMaterialTypeDto {
  extraProperties?: {}
  id: string
  materialTypeId: string
  nodeId: string
  nodeName: string
  name: string
  materialTypeCode: string
  materialTypeName: string
  materialTypeCategory: string
  materialTypeRemark: string
  remark: string
  rank: number
  type: string
  flowType: string
  value: number
  maxValue?: number
  minValue?: number
  equipmentNumber: number
  singleValue?: number
  stateItems: NodeMaterialTypeStateDto[]
}

export interface NodeMaterialTypeDtoPagedResultDto {
  items: NodeMaterialTypeDto[]
  totalCount: number
}

export interface NodeMaterialTypeStateDto {
  id: string
  nodeId: string
  materialTypeId: string
  nodeMaterialTypeId: string
  state: string
  value: number
  singleValue?: number
  expression: string
  parameterType?: ParameterType
  startDelayTime: number
  endDelayTime: number
  startTransitionTime: number
  endTransitionTime: number
}

export interface NodePropertyDto {
  nodeId: string
  propertyCode: string
  deviceId: string
  tagId: string
  onlyOnce: boolean
  nodeName: string
  rank: number
}

export interface NodePropertyDtoPagedResultDto {
  items: NodePropertyDto[]
  totalCount: number
}

export interface NodeTypeDto {
  extraProperties?: {}
  id: string
  name: string
  code: string
  category: string
  remark: string
  rank: number
}

export interface NodeTypeDtoPagedResultDto {
  items: NodeTypeDto[]
  totalCount: number
}

export interface ObjectExtensionsDto {
  modules?: {}
  enums?: {}
}

export interface ParameterApiDescriptionModel {
  nameOnMethod: string
  name: string
  jsonName: string
  type: string
  typeSimple: string
  isOptional: boolean
  defaultValue?: any | null
  constraintTypes: string[]
  bindingSourceId: string
  descriptorName: string
}

export type ParameterType = 'Constant' | 'Decrease' | 'DecreasePercent' | 'Formula'

export interface PermissionGrantInfoDto {
  name: string
  displayName: string
  parentName: string
  isGranted: boolean
  allowedProviders: string[]
  grantedProviders: ProviderInfoDto[]
}

export interface PermissionGroupDto {
  name: string
  displayName: string
  permissions: PermissionGrantInfoDto[]
}

export interface ProfileDto {
  extraProperties?: {}
  userName: string
  email: string
  name: string
  surname: string
  phoneNumber: string
  isExternal: boolean
  hasPassword: boolean
  concurrencyStamp: string
}

export interface PropertyApiDescriptionModel {
  name: string
  jsonName: string
  type: string
  typeSimple: string
  isRequired: boolean
}

export interface PropertyDefinitionDto {
  id: string
  name: string
  code: string
  remark: string
  category: string
  unit: string
  defaultValue: string
  valueType: string
  source: string
  rank: number
}

export interface PropertyDefinitionDtoPagedResultDto {
  items: PropertyDefinitionDto[]
  totalCount: number
}

export interface PropertyDto {
  id: string
  entityType: string
  entityId: string
  propertyDefinitionId: string
  isMain: boolean
  value: string
  maxValue?: number
  minValue?: number
  name: string
  code: string
  remark: string
  category: string
  unit: string
  defaultValue: string
  valueType: string
  source: string
}

export interface PropertyDtoPagedResultDto {
  items: PropertyDto[]
  totalCount: number
}

export interface ProviderInfoDto {
  providerName: string
  providerKey: string
}

export interface RankValueDto {
  deviceId: string
  value: number
  nodeId: string
  nodeName: string
}

export type ReadMode = 'Read' | 'Write' | 'ReadWrite'

export interface RegisterDto {
  extraProperties?: {}
  userName: string
  emailAddress: string
  password: string
  appName: string
}

export interface RemoteServiceErrorInfo {
  code: string
  message: string
  details: string
  data?: {}
  validationErrors: RemoteServiceValidationErrorInfo[]
}

export interface RemoteServiceErrorResponse {
  error?: RemoteServiceErrorInfo
}

export interface RemoteServiceValidationErrorInfo {
  message: string
  members: string[]
}

export interface ResetPasswordDto {
  userId: string
  resetToken: string
  password: string
}

export interface ReturnValueApiDescriptionModel {
  type: string
  typeSimple: string
}

export interface SampleDto {
  value: number
}

export interface SaveBackgroundWorkerInstanceDto {
  remark: string
  status: number
  cronExpression: string
}

export interface SendPasswordResetCodeDto {
  email: string
  appName: string
  returnUrl: string
  returnUrlHash: string
}

export interface StatisticItem {
  active: number
  inactive: number
  amount: number
}

export interface TagDefinitionDto {
  extraProperties?: {}
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  code: string
  name: string
  remark: string
  expression: string
  unit: string
  scale?: number
  valueType?: TagValueType
  rank: number
  interval?: number
  valueLength: number
  readMode?: ReadMode
  parentId?: string
}

export interface TagDefinitionDtoPagedResultDto {
  items: TagDefinitionDto[]
  totalCount: number
}

export interface TagDto {
  extraProperties?: {}
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  remark: string
  address: string
  expression: string
  interval?: number
  deviceId?: string
  deviceName: string
  isActive: boolean
  rank: number
  tagType?: TagType
  tagDefinition?: TagDefinitionDto
}

export interface TagDtoPagedResultDto {
  items: TagDto[]
  totalCount: number
}

export interface TagRealMeasurementDto {
  timestamp: string
  nodeId: string
  nodeName: string
  rank: number
  deviceId: string
  pressure: number
  flow: number
  flowAcc: number
  temperature: number
}

export type TagType = 'IO' | 'User' | 'Computing' | 'System'

export interface TagValueAggrMeasurementDto {
  deviceId: string
  eventTime: string
  value: number
  nodeId: string
  nodeName: string
}

export interface TagValueDto {
  id: number
  tagId: string
  clock: string
  value: string
  tag?: TagDto
  creationTime: string
  tagDefinition?: TagDefinitionDto
}

export interface TagValueDtoPagedResultDto {
  items: TagValueDto[]
  totalCount: number
}

export type TagValueType = 'String' | 'Boolean' | 'Int' | 'Float' | 'Json'

export interface TenantCreateDto {
  extraProperties?: {}
  name: string
  adminEmailAddress: string
  adminPassword: string
}

export interface TenantDto {
  extraProperties?: {}
  id: string
  name: string
  concurrencyStamp: string
}

export interface TenantDtoPagedResultDto {
  items: TenantDto[]
  totalCount: number
}

export interface TenantUpdateDto {
  extraProperties?: {}
  name: string
  concurrencyStamp: string
}

export interface TimeValueDto {
  eventTime: string
  value: number
}

export interface TimeZone {
  iana?: IanaTimeZone
  windows?: WindowsTimeZone
}

export interface TimingDto {
  timeZone?: TimeZone
}

export interface TypeApiDescriptionModel {
  baseType: string
  isEnum: boolean
  enumNames: string[]
  enumValues: object
  genericArguments: string[]
  properties: PropertyApiDescriptionModel[]
}

export interface UpdateAppTreeNodeDto {
  parentId?: string
  displayName: string
  rank: number
  icon: string
}

export interface UpdateDeviceDto {
  code: string
  name: string
  remark: string
  rank: number
  locationId?: string
  parentId?: string
}

export interface UpdateDriverDefinitionDto {}

export interface UpdateDriverDto {
  title: string
  remark: string
  isActive: boolean
  rank: number
  channelId: string
  driverDefinitionId: string
  interval?: number
  timeout?: number
  retryCount?: number
}

export interface UpdateDriverSettingsDto {
  settings?: {}
}

export interface UpdateDriverTagDto {
  tagId: string
  address: string
  remark: string
}

export interface UpdateEmailSettingsDto {
  smtpHost: string
  smtpPort: number
  smtpUserName: string
  smtpPassword: string
  smtpDomain: string
  smtpEnableSsl: boolean
  smtpUseDefaultCredentials: boolean
  defaultFromAddress: string
  defaultFromDisplayName: string
}

export interface UpdateExtraPropertiesDto {
  extraProperties?: {}
}

export interface UpdateFeatureDto {
  name: string
  value: string
}

export interface UpdateFeaturesDto {
  features: UpdateFeatureDto[]
}

export interface UpdateMaterialTypeDto {
  name: string
  code: string
  category: string
  remark: string
  rank: number
}

export interface UpdateNodeDto {
  nodeTypeId?: string
  name: string
  remark: string
  rank: number
}

export interface UpdateNodeMaterialTypeDto {
  id: string
  nodeId: string
  name: string
  nodeName: string
  flowType: string
  remark: string
  rank: number
  type: string
  value: number
  maxValue?: number
  minValue?: number
  equipmentNumber: number
  singleValue?: number
}

export interface UpdateNodePropertyDto {
  nodeId: string
  propertyCode: string
  tagId: string
}

export interface UpdateNodeTypeDto {
  name: string
  code: string
  category: string
  remark: string
  rank: number
}

export interface UpdatePermissionDto {
  name: string
  isGranted: boolean
}

export interface UpdatePermissionsDto {
  permissions: UpdatePermissionDto[]
}

export interface UpdateProfileDto {
  extraProperties?: {}
  userName: string
  email: string
  name: string
  surname: string
  phoneNumber: string
  concurrencyStamp: string
}

export interface UpdatePropertyDefinitionDto {
  name: string
  remark: string
  category: string
  unit: string
  valueType: string
  source: string
}

export interface UpdatePropertyDto {
  isMain: boolean
  value: string
  maxValue?: number
  minValue?: number
}

export interface UpdateTagDefinitionDto {
  code: string
  name: string
  remark: string
  unit: string
  scale?: number
  valueType?: TagValueType
  rank: number
  interval?: number
  readMode?: ReadMode
  parentId?: string
}

export interface UpdateTagDto {
  interval?: number
  name: string
  deviceId?: string
  readMode?: ReadMode
  isActive: boolean
  remark: string
  rank: number
  tagType?: TagType
  expression: string
  tagDefinitionId: string
}

export interface UserData {
  id: string
  tenantId?: string
  userName: string
  name: string
  surname: string
  email: string
  emailConfirmed: boolean
  phoneNumber: string
  phoneNumberConfirmed: boolean
}

export interface UserDataListResultDto {
  items: UserData[]
}

export interface UserLoginInfo {
  userNameOrEmailAddress: string
  password: string
  rememberMe: boolean
}

export interface WindowsTimeZone {
  timeZoneId: string
}
