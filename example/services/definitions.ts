export interface AbpLoginResult {
  result: 1 | 2 | 3 | 4 | 5
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
}

export interface AdditionDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  heatNo: string
  materialId: string
  material?: AuxMaterialDto
  weight: number
  eventTime: string
}

export interface AdditionDtoPagedResultDto {
  items: AdditionDto[]
  totalCount: number
}

export interface ApplicationApiDescriptionModel {
  modules?: any
  types?: any
}

export interface ApplicationAuthConfigurationDto {
  policies?: any
  grantedPolicies?: any
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
  values?: any
}

export interface ApplicationLocalizationConfigurationDto {
  values?: any
  languages: LanguageInfo[]
  currentCulture?: CurrentCultureDto
  defaultResourceName: string
  languagesMap?: any
  languageFilesMap?: any
}

export interface ApplicationSettingConfigurationDto {
  values?: any
}

export interface AuxMaterialDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  code: string
  remark: string
  category: string
  subcategory: string
}

export interface AuxMaterialDtoPagedResultDto {
  items: AuxMaterialDto[]
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
  category: 1 | 2 | 3
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

export interface ChannelDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  remark: string
  rank: number
  host: string
  port: string
  userName: string
  password: string
  channelType: 0 | 1 | 2
  isActive: boolean
  tenantId?: string
}

export interface ChannelDtoPagedResultDto {
  items: ChannelDto[]
  totalCount: number
}

export interface ClockDto {
  kind: string
}

export interface ConfigLadleInput {
  heatNo: string
  ladleNo: string
  ladleType: string
  ladleRemark: string
  ladleAge: number
}

export interface ControllerApiDescriptionModel {
  controllerName: string
  type: string
  interfaces: ControllerInterfaceApiDescriptionModel[]
  actions?: any
}

export interface ControllerInterfaceApiDescriptionModel {
  type: string
}

export interface CraneDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  code: string
  name: string
  remark: string
  isActive: boolean
  rank: number
  kind: 0 | 1
  astrideNo: string
  astrideName: string
  xStart: number
  yStart: number
  xEnd: number
  yEnd: number
}

export interface CraneDtoPagedResultDto {
  items: CraneDto[]
  totalCount: number
}

export interface CreateChannelDto {
  name: string
  remark: string
  rank: number
  host: string
  port: string
  userName: string
  password: string
  channelType: 0 | 1 | 2
  isActive: boolean
}

export interface CreateDeviceDto {
  code: string
  name: string
  remark: string
  rank: number
  isActive: boolean
  locationId?: string
  parentId?: string
  deviceKey: string
  deviceSecret: string
  accessToken: string
  ipAddress: string
  apiUrl: string
  serverApiUrl: string
}

export interface CreateDriverDto {
  name: string
  remark: string
  isActive: boolean
  rank: number
  host: string
  port: string
  userName: string
  password: string
  driverDefinitionId: string
  interval?: number
  timeout?: number
  retryCount?: number
  tagIds: string[]
}

export interface CreateLadleDto {
  name: string
  ladleType: string
  age: number
  code: string
  lifeCount: number
  manufacturer: string
  remark: string
}

export interface CreateLocationDto {
  name: string
  remark: string
  rank: number
  parentId?: string
}

export interface CreateTagDefinitionDto {
  code: string
  name: string
  remark: string
  unit: string
  scale?: number
  valueType: 0 | 1 | 2 | 3 | 4
  rank: number
  interval?: number
  readMode: 0 | 1 | 2
}

export interface CreateTagDto {
  dataSource: string
  address: string
  interval?: number
  deviceId?: string
  readMode: 0 | 1 | 2
  sourceTag: string
  isActive: boolean
  remark: string
  rank: number
  tagType: 0 | 1 | 2 | 4
  tagDefinitionCode: string
  tagDefinitionId: string
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
  userName: string
  name: string
  surName: string
  email: string
  emailVerified: boolean
  phoneNumber: string
  phoneNumberVerified: boolean
  roles: string[]
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
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  remark: string
  rank: number
  locationId: string
  code: string
  isActive: boolean
  location?: LocationDto
  parent?: DeviceDto
  parentId?: string
  isGateway: boolean
  deviceKey: string
  deviceSecret: string
  accessToken: string
  ipAddress: string
  apiUrl: string
  serverApiUrl: string
  tags: TagDto[]
}

export interface DeviceDtoPagedResultDto {
  items: DeviceDto[]
  totalCount: number
}

export interface DriverDefinitionDto {
  extraProperties?: any
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
  channelType: 0 | 1 | 2
  type: string
  usageType: 0 | 1 | 2 | 3
}

export interface DriverDto {
  extraProperties?: any
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
  interval?: number
  timeout?: number
  retryCount?: number
  tags: TagDto[]
  state: 0 | 1 | 2
}

export interface DriverDtoPagedResultDto {
  items: DriverDto[]
  totalCount: number
}

export interface EntityExtensionDto {
  properties?: any
  configuration?: any
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
  config?: any
}

export interface ExtensionPropertyDto {
  type: string
  typeSimple: string
  displayName?: LocalizableStringDto
  api?: ExtensionPropertyApiDto
  ui?: ExtensionPropertyUiDto
  attributes: ExtensionPropertyAttributeDto[]
  configuration?: any
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
}

export interface FinishJobPlanInput {
  jobPlanId: string
  endTime: string
}

export interface GetFeatureListResultDto {
  groups: FeatureGroupDto[]
}

export interface GetPermissionListResultDto {
  entityDisplayName: string
  groups: PermissionGroupDto[]
}

export interface HeatPlanChangeShiftFlagInput {
  pono: string
  shiftFlag: boolean
}

export interface HeatPlanChangeStatusInput {
  ponos: string[]
  state: 'PlanReady' | 'Start' | 'End'
}

export interface HeatPlanChangeTundishFlagInput {
  pono: string
  tundishFlag: boolean
  tundishNo: string
}

export interface HeatPlanDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  pono: string
  heatNo: string
  heatSeq: number
  shiftNo: string
  tundishNo: string
  hotNo: string
  jobPlans: JobPlanDto[]
  productionPlan?: ProductionPlanDto
  refinePathCode: string
  refinePath: string
  castLotNo: string
  castLotDivNo: string
  castLotSum: number
  ladleNo: string
  ladleAge: number
  ladleType: string
  ladleRemark: string
  divFlag: boolean
  shiftChanged: boolean
  tundishChanged: boolean
  tapTemperatue: number
  tapWeight: number
  scrapWeight: number
  ironWeight: number
  pourWeight: number
  scrapRate: number
  startTime?: string
  endTime?: string
  duration?: TimeSpan
  state: 'PlanReady' | 'Start' | 'End'
}

export interface HeatPlanDtoPagedResultDto {
  items: HeatPlanDto[]
  totalCount: number
}

export interface HeatPlanExchangeProductionPlanInput {
  oldPono: string
  newPono: string
}

export interface HeatPlanLatestQueryDto {
  start: string
  includeJobPlans: boolean
  includeProductionPlan: boolean
}

export interface HeatPlanSimpleDto {
  id: string
  pono: string
  heatNo: string
  heatSeq: number
  jobPlans: JobPlanSimpleDto[]
  castId: string
  steelType: string
  refinePath: string
  ladleNo: string
  ladleAge: number
  ladleType: string
  ladleRemark: string
  divFlag: boolean
  shiftChanged: boolean
  tundishChanged: boolean
}

export interface HeatPlanSimpleDtoListResultDto {
  items: HeatPlanSimpleDto[]
}

export interface IanaTimeZone {
  timeZoneName: string
}

export interface IdentityRoleCreateDto {
  extraProperties?: any
  name: string
  isDefault: boolean
  isPublic: boolean
}

export interface IdentityRoleDto {
  extraProperties?: any
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
  extraProperties?: any
  name: string
  isDefault: boolean
  isPublic: boolean
  concurrencyStamp: string
}

export interface IdentityUserCreateDto {
  extraProperties?: any
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
  extraProperties?: any
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
  extraProperties?: any
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

export interface IronBagDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  hotNo: string
  bagNo: string
  weight: number
  arrivalTime: string
  heatNo: string
  usedTime?: string
  mixed: boolean
  confirmed: boolean
  confirmTime?: string
  merges: IronMergeDto[]
}

export interface IronBagDtoPagedResultDto {
  items: IronBagDto[]
  totalCount: number
}

export interface IronMergeDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  hotNo: string
  bagNo: string
  heatNo: string
  weight: number
  usedWeight: number
  isMain: boolean
  parentHotNo: string
  modifyTime?: string
}

export interface IStringValueType {
  name: string
  properties?: any
  validator?: IValueValidator
}

export interface IValueValidator {
  name: string
  properties?: any
}

export interface JobPlanDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  workSeq: number
  heatNo: string
  machineId: string
  process: string
  planStart: string
  planEnd: string
  duration?: TimeSpan
  actStart?: string
  actEnd?: string
  simStart?: string
  simEnd?: string
  rank: number
  status: 'NotStarted' | 'Processing' | 'Completed' | 'None'
  productionPlan?: ProductionPlanDto
  start: string
  end: string
  isStart: boolean
  isEnd: boolean
}

export interface JobPlanDtoPagedResultDto {
  items: JobPlanDto[]
  totalCount: number
}

export interface JobPlanInput {
  id: string
  heatNo: string
  machineId: string
  planStart: string
  planEnd: string
  state: 0 | 1 | 2
}

export interface JobPlanSimpleDto {
  id: string
  heatNo: string
  machineId: string
  process: string
  start: string
  end: string
  duration?: TimeSpan
  status: 'NotStarted' | 'Processing' | 'Completed' | 'None'
  workSeq: number
  rank: number
}

export interface LadleDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  code: string
  age: number
  ladleType: string
  plugBrickCount: number
  slagLineCount: number
  downNozzleCount: number
  upNozzleCount: number
  slidingPlateCount: number
  lifeCount: number
  manufacturer: string
  useTime: string
  isActive: boolean
  remark: string
}

export interface LadleDtoPagedResultDto {
  items: LadleDto[]
  totalCount: number
}

export interface LadleRecordDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  ladleNo: string
  ladleAge: number
  ladleType: string
  remark: string
  heatNo: string
  lastHeatNo: string
  lastOfflineTime?: string
  onlineTime?: string
  offlineTime?: string
  emptyMinutes: number
  workMinutes: number
}

export interface LadleRecordDtoPagedResultDto {
  items: LadleRecordDto[]
  totalCount: number
}

export interface LadleStateDto {
  id: string
  ladleNo: string
  ladleType: string
  isActive: boolean
  remark: string
  heatNo: string
  lastHeatNo: string
  lastOfflineTime?: string
  craneNo: string
}

export interface LadleStateDtoPagedResultDto {
  items: LadleStateDto[]
  totalCount: number
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

export interface LocationDtoPagedResultDto {
  items: LocationDto[]
  totalCount: number
}

export interface MachineCardDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  machine: string
  steelType: string
  remark: string
  isActive: boolean
  version: string
  beginDate: string
  endDate: string
}

export interface MachineCardDtoPagedResultDto {
  items: MachineCardDto[]
  totalCount: number
}

export interface MachineDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  name: string
  shortName: string
  station: string
  process: string
  executionTime: number
  moveTime: number
  intervalTime: number
  category: string
  seqNo: number
  rank: number
  isMain: boolean
  remark: string
  isActive: boolean
}

export interface MachineDtoPagedResultDto {
  items: MachineDto[]
  totalCount: number
}

export interface MaintenancePlanDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  machine: string
  eventCode: string
  planStart: string
  planEnd: string
  actStart?: string
  actEnd?: string
  remark: string
}

export interface MaintenancePlanDtoPagedResultDto {
  items: MaintenancePlanDto[]
  totalCount: number
}

export interface MasterPlanConfirmDto {
  masterPlanId: string
  count: number
  isContinuous: boolean
}

export interface MasterPlanConfirmInput {
  items: MasterPlanConfirmDto[]
}

export interface MasterProductionPlanDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  msc: string
  castId: string
  steelType: string
  hotSendPlan: string
  carryPlan: string
  planDate: string
  planCount: number
  plans: ProductionPlanDto[]
  rank: number
  isActive: boolean
  weight: number
  length: number
}

export interface MasterProductionPlanDtoPagedResultDto {
  items: MasterProductionPlanDto[]
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
  controllers?: any
}

export interface ModuleExtensionDto {
  entities?: any
  configuration?: any
}

export interface MultiTenancyInfoDto {
  isEnabled: boolean
}

export interface NameValue {
  name: string
  value: string
}

export interface ObjectExtensionsDto {
  modules?: any
  enums?: any
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

export interface ProcessCardDataDto {
  process: string
  cardId: string
  card?: ProcessCardDto
  indexId: string
  cardIndex?: ProcessCardIndexDto
  textValue: string
  aim: number
  max: number
  min: number
  rank: number
}

export interface ProcessCardDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  sourceMapId: string
  cardNo: string
  steelType: string
  grade: string
  standard: string
  remark: string
  isActive: boolean
  version: string
  beginDate: string
  endDate: string
  cardData: ProcessCardDataDto[]
}

export interface ProcessCardDtoPagedResultDto {
  items: ProcessCardDto[]
  totalCount: number
}

export interface ProcessCardIndexDto {
  sourceMapId: string
  sampleMapCode: string
  code: string
  name: string
  category: string
  subcategory: string
  remark: string
  unit: string
  valueType: 'String' | 'Boolean' | 'Integer' | 'Float' | 'DateTime'
}

export interface ProductionPlanDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  masterPlanId: string
  castId: string
  steelType: string
  refinePath: string
  planTapWeight: number
  planPourWeight: number
  slabThick: number
  slabWidth: number
  slabLen: number
  planDate: string
  isActive: boolean
}

export interface ProductionPlanDtoPagedResultDto {
  items: ProductionPlanDto[]
  totalCount: number
}

export interface ProfileDto {
  extraProperties?: any
  userName: string
  email: string
  name: string
  surname: string
  phoneNumber: string
  isExternal: boolean
  hasPassword: boolean
}

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
  extraProperties?: any
  userName: string
  emailAddress: string
  password: string
  appName: string
}

export interface RemoteServiceErrorInfo {
  code: string
  message: string
  details: string
  data?: any
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
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  sourceMapId: string
  heatNo: string
  rank: number
  steelType: string
  kind: 0 | 1 | 2
  machine: string
  chemC?: number
  chemN?: number
  chemP?: number
  chemS?: number
  chemSi?: number
  chemMn?: number
  chemCa?: number
  chemAl?: number
  chemCu?: number
  chemB?: number
  chemSn?: number
  chemBi?: number
  chemAs?: number
  chemMo?: number
  chemZn?: number
  chemV?: number
  chemZr?: number
  chemTi?: number
  chemNi?: number
  chemNb?: number
  chemFb?: number
  chemFal?: number
  chemCr?: number
  chemCo?: number
  chemBsol?: number
  chemBoxy?: number
  chemAlsol?: number
  chemAloxy?: number
  chemAlins?: number
  remark: string
  eventTime: string
}

export interface SampleDtoPagedResultDto {
  items: SampleDto[]
  totalCount: number
}

export interface SaveAdditionDto {
  heatNo: string
  materialId: string
  weight: number
  eventTime: string
}

export interface SaveAuxMaterialDto {
  name: string
  code: string
  remark: string
  category: string
  subcategory: string
}

export interface SaveBackgroundWorkerInstanceDto {
  remark: string
  status: number
  cronExpression: string
}

export interface SaveCraneDto {
  code: string
  name: string
  remark: string
  isActive: boolean
  rank: number
  kind: 0 | 1
  astrideNo: string
  astrideName: string
  xStart: number
  yStart: number
  xEnd: number
  yEnd: number
}

export interface SaveIronBagDto {
  hotNo: string
  bagNo: string
  weight: number
  arrivalTime: string
  heatNo: string
  usedTime?: string
  mixed: boolean
  confirmed: boolean
  confirmTime?: string
}

export interface SaveJobPlansInput {
  items: JobPlanInput[]
}

export interface SaveMachineCardDto {
  name: string
  shortName: string
  code: string
  station: string
  process: string
  rank: number
  remark: string
  isActive: boolean
  sourceMapCode: string
}

export interface SaveMachineDto {
  name: string
  shortName: string
  code: string
  station: string
  process: string
  rank: number
  remark: string
  isActive: boolean
  sourceMapCode: string
}

export interface SaveMaintenancePlanDto {
  name: string
  shortName: string
  code: string
  station: string
  process: string
  rank: number
  remark: string
  isActive: boolean
  sourceMapCode: string
}

export interface SaveMasterProductionPlanDto {
  msc: string
  castId: string
  steelType: string
  hotSendPlan: string
  carryPlan: string
  planDate: string
  planCount: number
  weight: number
  length: number
}

export interface SaveProcessCardDto {
  name: string
  shortName: string
  code: string
  station: string
  process: string
  rank: number
  remark: string
  isActive: boolean
  sourceMapCode: string
}

export interface SaveProductionPlanDto {
  masterPlanId: string
  castId: string
  steelType: string
  refinePath: string
  planTapWeight: number
  planPourWeight: number
  slabThick: number
  slabWidth: number
  slabLen: number
  planDate: string
}

export interface SaveSampleDto {
  sourceMapId: string
  heatNo: string
  rank: number
  steelType: string
  kind: 0 | 1 | 2
  machine: string
  eventTime: string
}

export interface SendPasswordResetCodeDto {
  email: string
  appName: string
  returnUrl: string
  returnUrlHash: string
}

export interface StartJobPlanInput {
  jobPlanId: string
  startTime: string
}

export interface SwapJobPlansInput {
  jobPlanId1: string
  jobPlanId2: string
}

export interface TagDefinitionDto {
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
  valueType: 0 | 1 | 2 | 3 | 4
  rank: number
  interval?: number
  valueLength: number
  readMode: 0 | 1 | 2
}

export interface TagDefinitionDtoPagedResultDto {
  items: TagDefinitionDto[]
  totalCount: number
}

export interface TagDto {
  extraProperties?: any
  id: string
  creationTime: string
  creatorId?: string
  lastModificationTime?: string
  lastModifierId?: string
  dataSource: string
  address: string
  interval?: number
  deviceId?: string
  device?: DeviceDto
  readMode: 0 | 1 | 2
  sourceTag: string
  isActive: boolean
  remark: string
  rank: number
  tagType: 0 | 1 | 2 | 4
  tagDefinitionCode: string
  tagDefinitionId: string
  tagDefinition?: TagDefinitionDto
}

export interface TagDtoPagedResultDto {
  items: TagDto[]
  totalCount: number
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

export interface TenantCreateDto {
  extraProperties?: any
  name: string
  adminEmailAddress: string
  adminPassword: string
}

export interface TenantDto {
  extraProperties?: any
  id: string
  name: string
}

export interface TenantDtoPagedResultDto {
  items: TenantDto[]
  totalCount: number
}

export interface TenantUpdateDto {
  extraProperties?: any
  name: string
}

export interface TimeSpan {
  ticks: number
  days: number
  hours: number
  milliseconds: number
  minutes: number
  seconds: number
  totalDays: number
  totalHours: number
  totalMilliseconds: number
  totalMinutes: number
  totalSeconds: number
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
  enumValues: any | null[]
  genericArguments: string[]
  properties: PropertyApiDescriptionModel[]
}

export interface UpdateChannelDto {
  name: string
  remark: string
  rank: number
  host: string
  port: string
  userName: string
  password: string
  channelType: 0 | 1 | 2
  isActive: boolean
}

export interface UpdateDeviceDto {
  code: string
  name: string
  remark: string
  rank: number
  isActive: boolean
  locationId?: string
  parentId?: string
  deviceKey: string
  deviceSecret: string
  accessToken: string
  ipAddress: string
  apiUrl: string
  serverApiUrl: string
}

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
  state: 0 | 1 | 2
}

export interface UpdateFeatureDto {
  name: string
  value: string
}

export interface UpdateFeaturesDto {
  features: UpdateFeatureDto[]
}

export interface UpdateLadleDto {
  name: string
  ladleType: string
  age: number
  code: string
  lifeCount: number
  manufacturer: string
  isActive: boolean
  remark: string
}

export interface UpdateLocationDto {
  name: string
  remark: string
  rank: number
  parentId?: string
}

export interface UpdatePermissionDto {
  name: string
  isGranted: boolean
}

export interface UpdatePermissionsDto {
  permissions: UpdatePermissionDto[]
}

export interface UpdateProfileDto {
  extraProperties?: any
  userName: string
  email: string
  name: string
  surname: string
  phoneNumber: string
}

export interface UpdateTagDefinitionDto {
  code: string
  name: string
  remark: string
  unit: string
  scale?: number
  valueType: 0 | 1 | 2 | 3 | 4
  rank: number
  interval?: number
  readMode: 0 | 1 | 2
}

export interface UpdateTagDto {
  dataSource: string
  address: string
  interval?: number
  deviceId?: string
  readMode: 0 | 1 | 2
  channelId: string
  sourceTag: string
  isActive: boolean
  remark: string
  rank: number
  tagType: 0 | 1 | 2 | 4
  tagDefinitionCode: string
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
