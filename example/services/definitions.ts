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
}

export interface AlarmReportDto {
  extraProperties?: {}
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  channelId: string
  alarmLevel: string
  category: string
  dataFileId: string
  isAck: boolean
  isConfirmed: boolean
  confirmTime: string
  remark: string
  source: string
}

export interface AlarmReportDtoPagedResultDto {
  items: AlarmReportDto[]
  totalCount: number
}

export interface AlarmReportQueryDto {}

export interface AnalysisReportDto {
  extraProperties?: {}
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  dataFileId: string
  analysisModule: string
  result: string
}

export interface AnalysisReportDtoPagedResultDto {
  items: AnalysisReportDto[]
  totalCount: number
}

export interface AnalysisReportQueryDto {}

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

export interface ChangePasswordInput {
  currentPassword: string
  newPassword: string
}

export interface ChannelDto {
  extraProperties?: {}
  id: string
  planId: string
  targetId: string
  channelNo: string
  channelType: string
  longitude: number
  latitude: number
}

export interface ClockDto {
  kind: string
}

export interface ControllerApiDescriptionModel {
  controllerName: string
  type: string
  interfaces: ControllerInterfaceApiDescriptionModel[]
  actions?: {}
}

export interface ControllerInterfaceApiDescriptionModel {
  type: string
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
  userName: string
  name: string
  surName: string
  email: string
  emailVerified: boolean
  phoneNumber: string
  phoneNumberVerified: boolean
  roles: string[]
}

export interface DataFileDto {
  extraProperties?: {}
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  channelId: string
  filePath: string
  fileType: string
  contentType: string
  edgeFilePath: string
  edgeCreationTime: string
  edgeUploadTime: string
}

export interface DataFileDtoPagedResultDto {
  items: DataFileDto[]
  totalCount: number
}

export interface DataFileQueryDto {}

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
  stationId: string
  remark: string
  voltageLevel: string
  targets: TargetDto[]
}

export interface DeviceDtoPagedResultDto {
  items: DeviceDto[]
  totalCount: number
}

export interface DeviceQueryDto {}

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

export interface GetFeatureListResultDto {
  groups: FeatureGroupDto[]
}

export interface GetPermissionListResultDto {
  entityDisplayName: string
  groups: PermissionGroupDto[]
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

export type LoginResultType = 'Success' | 'InvalidUserNameOrPassword' | 'NotAllowed' | 'LockedOut' | 'RequiresTwoFactor'

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

export interface PlanDto {
  extraProperties?: {}
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  remark: string
  diagramImage: string
  projectId: string
  channels: ChannelDto[]
}

export interface PlanDtoPagedResultDto {
  items: PlanDto[]
  totalCount: number
}

export interface PlanQueryDto {}

export interface ProfileDto {
  extraProperties?: {}
  userName: string
  email: string
  name: string
  surname: string
  phoneNumber: string
  isExternal: boolean
  hasPassword: boolean
}

export interface ProjectDto {
  extraProperties?: {}
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  remark: string
}

export interface ProjectDtoPagedResultDto {
  items: ProjectDto[]
  totalCount: number
}

export interface ProjectQueryDto {}

export interface PropertyApiDescriptionModel {
  name: string
  jsonName: string
  type: string
  typeSimple: string
  isRequired: boolean
}

export interface ProviderInfoDto {
  providerName: string
  providerKey: string
}

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

export interface SaveAlarmReportDto {}

export interface SaveAnalysisReportDto {}

export interface SaveDataFileDto {}

export interface SaveDeviceDto {}

export interface SavePlanDto {
  extraProperties?: {}
  id: string
}

export interface SaveProjectDto {}

export interface SaveStationDto {}

export interface SendPasswordResetCodeDto {
  email: string
  appName: string
  returnUrl: string
  returnUrlHash: string
}

export interface StationDto {
  extraProperties?: {}
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  avatar: string
  longitude: number
  latitude: number
  remark: string
}

export interface StationDtoPagedResultDto {
  items: StationDto[]
  totalCount: number
}

export interface StationQueryDto {}

export interface TargetDto {
  extraProperties?: {}
  id: string
  deviceId: string
  name: string
  type: string
  remark: string
}

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
}

export interface TenantDtoPagedResultDto {
  items: TenantDto[]
  totalCount: number
}

export interface TenantUpdateDto {
  extraProperties?: {}
  name: string
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

export interface UpdateFeatureDto {
  name: string
  value: string
}

export interface UpdateFeaturesDto {
  features: UpdateFeatureDto[]
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
