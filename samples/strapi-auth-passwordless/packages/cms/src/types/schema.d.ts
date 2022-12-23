import {
  CollectionTypeSchema,
  StringAttribute,
  RequiredAttribute,
  SetMinMaxLength,
  JSONAttribute,
  DefaultTo,
  RelationAttribute,
  DateTimeAttribute,
  PrivateAttribute,
  EmailAttribute,
  UniqueAttribute,
  PasswordAttribute,
  BooleanAttribute,
  EnumerationAttribute,
  BigIntegerAttribute,
  IntegerAttribute,
  DecimalAttribute,
  SetMinMax,
  TextAttribute,
  UIDAttribute,
  SingleTypeSchema,
  ComponentAttribute,
  CustomField,
  DateAttribute,
  RichTextAttribute,
  MediaAttribute,
  ComponentSchema,
} from '@strapi/strapi'

export interface AdminPermission extends CollectionTypeSchema {
  info: {
    name: 'Permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    subject: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    properties: JSONAttribute & DefaultTo<{}>
    conditions: JSONAttribute & DefaultTo<[]>
    role: RelationAttribute<'admin::permission', 'manyToOne', 'admin::role'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::permission', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::permission', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminUser extends CollectionTypeSchema {
  info: {
    name: 'User'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    firstname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    lastname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    username: StringAttribute
    email: EmailAttribute &
      RequiredAttribute &
      PrivateAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: StringAttribute & PrivateAttribute
    registrationToken: StringAttribute & PrivateAttribute
    isActive: BooleanAttribute & PrivateAttribute & DefaultTo<false>
    roles: RelationAttribute<'admin::user', 'manyToMany', 'admin::role'> & PrivateAttribute
    blocked: BooleanAttribute & PrivateAttribute & DefaultTo<false>
    preferedLanguage: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminRole extends CollectionTypeSchema {
  info: {
    name: 'Role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    code: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    description: StringAttribute
    users: RelationAttribute<'admin::role', 'manyToMany', 'admin::user'>
    permissions: RelationAttribute<'admin::role', 'oneToMany', 'admin::permission'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminApiToken extends CollectionTypeSchema {
  info: {
    name: 'Api Token'
    singularName: 'api-token'
    pluralName: 'api-tokens'
    displayName: 'Api Token'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }> &
      DefaultTo<''>
    type: EnumerationAttribute<['read-only', 'full-access', 'custom']> & RequiredAttribute & DefaultTo<'read-only'>
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: DateTimeAttribute
    permissions: RelationAttribute<'admin::api-token', 'oneToMany', 'admin::api-token-permission'>
    expiresAt: DateTimeAttribute
    lifespan: BigIntegerAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::api-token', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::api-token', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminApiTokenPermission extends CollectionTypeSchema {
  info: {
    name: 'API Token Permission'
    description: ''
    singularName: 'api-token-permission'
    pluralName: 'api-token-permissions'
    displayName: 'API Token Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    token: RelationAttribute<'admin::api-token-permission', 'manyToOne', 'admin::api-token'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::api-token-permission', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::api-token-permission', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginUploadFile extends CollectionTypeSchema {
  info: {
    singularName: 'file'
    pluralName: 'files'
    displayName: 'File'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    alternativeText: StringAttribute
    caption: StringAttribute
    width: IntegerAttribute
    height: IntegerAttribute
    formats: JSONAttribute
    hash: StringAttribute & RequiredAttribute
    ext: StringAttribute
    mime: StringAttribute & RequiredAttribute
    size: DecimalAttribute & RequiredAttribute
    url: StringAttribute & RequiredAttribute
    previewUrl: StringAttribute
    provider: StringAttribute & RequiredAttribute
    provider_metadata: JSONAttribute
    related: RelationAttribute<'plugin::upload.file', 'morphToMany'>
    folder: RelationAttribute<'plugin::upload.file', 'manyToOne', 'plugin::upload.folder'> & PrivateAttribute
    folderPath: StringAttribute &
      RequiredAttribute &
      PrivateAttribute &
      SetMinMax<{
        min: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::upload.file', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::upload.file', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginUploadFolder extends CollectionTypeSchema {
  info: {
    singularName: 'folder'
    pluralName: 'folders'
    displayName: 'Folder'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    pathId: IntegerAttribute & RequiredAttribute & UniqueAttribute
    parent: RelationAttribute<'plugin::upload.folder', 'manyToOne', 'plugin::upload.folder'>
    children: RelationAttribute<'plugin::upload.folder', 'oneToMany', 'plugin::upload.folder'>
    files: RelationAttribute<'plugin::upload.folder', 'oneToMany', 'plugin::upload.file'>
    path: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::upload.folder', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::upload.folder', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginEmailEmitterEmail extends CollectionTypeSchema {
  info: {
    singularName: 'email'
    pluralName: 'emails'
    displayName: 'Email'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    email: EmailAttribute
    delivered: BooleanAttribute & RequiredAttribute & DefaultTo<false>
    scheduled: BooleanAttribute & RequiredAttribute & DefaultTo<false>
    template: RelationAttribute<'plugin::email-emitter.email', 'oneToOne', 'plugin::email-designer.email-template'>
    payload: JSONAttribute
    log: TextAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::email-emitter.email', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::email-emitter.email', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginUsersPermissionsPermission extends CollectionTypeSchema {
  info: {
    name: 'permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute & RequiredAttribute
    role: RelationAttribute<'plugin::users-permissions.permission', 'manyToOne', 'plugin::users-permissions.role'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::users-permissions.permission', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::users-permissions.permission', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface PluginUsersPermissionsRole extends CollectionTypeSchema {
  info: {
    name: 'role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 3
      }>
    description: StringAttribute
    type: StringAttribute & UniqueAttribute
    permissions: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >
    users: RelationAttribute<'plugin::users-permissions.role', 'oneToMany', 'plugin::users-permissions.user'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface PluginUsersPermissionsUser extends CollectionTypeSchema {
  info: {
    name: 'user'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  options: {
    draftAndPublish: false
    timestamps: true
  }
  attributes: {
    username: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 3
      }>
    email: EmailAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    provider: StringAttribute
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: StringAttribute & PrivateAttribute
    confirmationToken: StringAttribute & PrivateAttribute
    confirmed: BooleanAttribute & DefaultTo<false>
    blocked: BooleanAttribute & DefaultTo<false>
    role: RelationAttribute<'plugin::users-permissions.user', 'manyToOne', 'plugin::users-permissions.role'>
    person: RelationAttribute<'plugin::users-permissions.user', 'oneToOne', 'api::person.person'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginI18NLocale extends CollectionTypeSchema {
  info: {
    singularName: 'locale'
    pluralName: 'locales'
    collectionName: 'locales'
    displayName: 'Locale'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      SetMinMax<{
        min: 1
        max: 50
      }>
    code: StringAttribute & UniqueAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::i18n.locale', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::i18n.locale', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface PluginEmailDesignerEmailTemplate extends CollectionTypeSchema {
  info: {
    singularName: 'email-template'
    pluralName: 'email-templates'
    displayName: 'Email Template'
    name: 'email-template'
    description: ''
  }
  options: {
    draftAndPublish: false
    timestamps: true
    increments: true
    comment: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: true
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    templateReferenceId: UIDAttribute<'plugin::email-designer.email-template', 'name'> & RequiredAttribute
    design: JSONAttribute
    subject: StringAttribute
    bodyHtml: TextAttribute
    bodyText: TextAttribute
    enabled: BooleanAttribute & DefaultTo<true>
    tags: JSONAttribute
    name: StringAttribute & RequiredAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::email-designer.email-template', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::email-designer.email-template', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginMenusMenu extends CollectionTypeSchema {
  info: {
    displayName: 'Menu'
    singularName: 'menu'
    pluralName: 'menus'
    tableName: 'menus'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    title: StringAttribute & RequiredAttribute
    slug: UIDAttribute<'plugin::menus.menu', 'title'> & RequiredAttribute
    items: RelationAttribute<'plugin::menus.menu', 'oneToMany', 'plugin::menus.menu-item'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::menus.menu', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::menus.menu', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginMenusMenuItem extends CollectionTypeSchema {
  info: {
    displayName: 'Menu Item'
    singularName: 'menu-item'
    pluralName: 'menu-items'
    tableName: 'menu_items'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    order: IntegerAttribute
    title: StringAttribute & RequiredAttribute
    url: StringAttribute
    target: EnumerationAttribute<['_blank', '_parent', '_self', '_top']>
    root_menu: RelationAttribute<'plugin::menus.menu-item', 'manyToOne', 'plugin::menus.menu'> & RequiredAttribute
    parent: RelationAttribute<'plugin::menus.menu-item', 'oneToOne', 'plugin::menus.menu-item'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::menus.menu-item', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::menus.menu-item', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginPasswordlessToken extends CollectionTypeSchema {
  info: {
    singularName: 'token'
    pluralName: 'tokens'
    displayName: 'Token'
    name: 'token'
  }
  options: {
    increments: false
    timestamps: true
    draftAndPublish: false
  }
  attributes: {
    email: EmailAttribute & RequiredAttribute & PrivateAttribute
    body: StringAttribute & RequiredAttribute & PrivateAttribute & UniqueAttribute
    context: JSONAttribute & PrivateAttribute
    login_date: DateTimeAttribute
    is_active: BooleanAttribute & DefaultTo<true>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::passwordless.token', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::passwordless.token', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiBaseSettingsBaseSettings extends SingleTypeSchema {
  info: {
    singularName: 'base-settings'
    pluralName: 'base-settings-set'
    displayName: 'BaseSettings'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    theme: ComponentAttribute<'custom.theme'>
    seo: ComponentAttribute<'shared.seo'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::base-settings.base-settings', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::base-settings.base-settings', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiCategoryCategory extends CollectionTypeSchema {
  info: {
    singularName: 'category'
    pluralName: 'categories'
    displayName: 'Category'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    slug: UIDAttribute<'api::category.category', 'name'> & RequiredAttribute
    posts: RelationAttribute<'api::category.category', 'oneToMany', 'api::post.post'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::category.category', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::category.category', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiContactContact extends CollectionTypeSchema {
  info: {
    singularName: 'contact'
    pluralName: 'contacts'
    displayName: 'Contact'
    description: ''
  }
  options: {
    populateCreatorFields: false
    draftAndPublish: false
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    email: EmailAttribute & RequiredAttribute
    subject: StringAttribute
    text: TextAttribute
    comment: StringAttribute & RequiredAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::contact.contact', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::contact.contact', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiPersonPerson extends CollectionTypeSchema {
  info: {
    singularName: 'person'
    pluralName: 'people'
    displayName: 'Person'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    uid: UIDAttribute & CustomField<'plugin::field-uuid.uuid'>
    users_permissions_user: RelationAttribute<'api::person.person', 'oneToOne', 'plugin::users-permissions.user'>
    tenant: RelationAttribute<'api::person.person', 'manyToOne', 'api::tenant.tenant'>
    fullName: StringAttribute & RequiredAttribute
    firstName: StringAttribute
    lastName: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::person.person', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::person.person', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiPolicyPolicy extends CollectionTypeSchema {
  info: {
    singularName: 'policy'
    pluralName: 'policies'
    displayName: 'Policy'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    title: StringAttribute & RequiredAttribute
    version: DateAttribute
    slug: UIDAttribute<'api::policy.policy', 'title'>
    type: EnumerationAttribute<['actionable', 'static']>
    content: RichTextAttribute & RequiredAttribute
    description: TextAttribute
    shortTitle: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::policy.policy', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::policy.policy', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiPolicyAcceptancePolicyAcceptance extends CollectionTypeSchema {
  info: {
    singularName: 'policy-acceptance'
    pluralName: 'policy-acceptances'
    displayName: 'PolicyAcceptance'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    uid: UIDAttribute & CustomField<'plugin::field-uuid.uuid'>
    policy: RelationAttribute<'api::policy-acceptance.policy-acceptance', 'oneToOne', 'api::policy.policy'>
    acceptanceDateTime: DateTimeAttribute
    tenant: RelationAttribute<'api::policy-acceptance.policy-acceptance', 'manyToOne', 'api::tenant.tenant'>
    actionMeta: JSONAttribute
    status: EnumerationAttribute<['pending', 'accepted']>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::policy-acceptance.policy-acceptance', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::policy-acceptance.policy-acceptance', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiPostPost extends CollectionTypeSchema {
  info: {
    singularName: 'post'
    pluralName: 'posts'
    displayName: 'Post'
    description: ''
  }
  options: {
    populateCreatorFields: false
    draftAndPublish: true
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    slug: UIDAttribute<'api::post.post', 'name'> & RequiredAttribute
    teaser: TextAttribute
    content: RichTextAttribute
    cover: MediaAttribute
    seo: ComponentAttribute<'shared.seo'>
    category: RelationAttribute<'api::post.post', 'manyToOne', 'api::category.category'>
    background: StringAttribute &
      CustomField<
        'plugin::color-picker.color',
        {
          format: 'rgba'
        }
      >
    uuid: UIDAttribute & RequiredAttribute & CustomField<'plugin::field-uuid.uuid'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::post.post', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::post.post', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiProjectProject extends CollectionTypeSchema {
  info: {
    singularName: 'project'
    pluralName: 'projects'
    displayName: 'Project'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    tenant: RelationAttribute<'api::project.project', 'manyToOne', 'api::tenant.tenant'>
    displayName: StringAttribute & RequiredAttribute & DefaultTo<'%ProjectName%'>
    slug: UIDAttribute<'api::project.project', 'displayName'>
    type: EnumerationAttribute<['full cycle', 'design', 'engineering', 'misc']> & DefaultTo<'design'>
    lead: StringAttribute
    cover: MediaAttribute
    deliverablesSet: ComponentAttribute<'data.deliverables-set', true>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::project.project', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::project.project', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiTenantTenant extends CollectionTypeSchema {
  info: {
    singularName: 'tenant'
    pluralName: 'tenants'
    displayName: 'Tenant'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    uid: UIDAttribute & CustomField<'plugin::field-uuid.uuid'>
    displayName: StringAttribute
    slug: StringAttribute & RequiredAttribute & UniqueAttribute
    projects: RelationAttribute<'api::tenant.tenant', 'oneToMany', 'api::project.project'>
    people: RelationAttribute<'api::tenant.tenant', 'oneToMany', 'api::person.person'>
    logo: MediaAttribute
    theme: ComponentAttribute<'custom.theme'>
    policy_acceptances: RelationAttribute<'api::tenant.tenant', 'oneToMany', 'api::policy-acceptance.policy-acceptance'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::tenant.tenant', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::tenant.tenant', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface CustomTheme extends ComponentSchema {
  info: {
    displayName: 'Theme'
    icon: 'paint-brush'
    description: ''
  }
  attributes: {
    primaryColor1: StringAttribute & CustomField<'plugin::color-picker.color'>
    primaryColor2: StringAttribute & CustomField<'plugin::color-picker.color'>
    primaryColor3: StringAttribute & CustomField<'plugin::color-picker.color'>
    primaryColor4: StringAttribute & CustomField<'plugin::color-picker.color'>
    primaryColor5: StringAttribute & CustomField<'plugin::color-picker.color'>
    secondaryColor1: StringAttribute & CustomField<'plugin::color-picker.color'>
    secondaryColor2: StringAttribute & CustomField<'plugin::color-picker.color'>
    secondaryColor3: StringAttribute & CustomField<'plugin::color-picker.color'>
    secondaryColor4: StringAttribute & CustomField<'plugin::color-picker.color'>
    secondaryColor5: StringAttribute & CustomField<'plugin::color-picker.color'>
    accentColor1: StringAttribute & CustomField<'plugin::color-picker.color'>
    accentColor2: StringAttribute & CustomField<'plugin::color-picker.color'>
    accentColor3: StringAttribute & CustomField<'plugin::color-picker.color'>
    accentColor4: StringAttribute & CustomField<'plugin::color-picker.color'>
    accentColor5: StringAttribute & CustomField<'plugin::color-picker.color'>
    miscColor1: StringAttribute & CustomField<'plugin::color-picker.color'>
    miscColor2: StringAttribute & CustomField<'plugin::color-picker.color'>
    miscColor3: StringAttribute & CustomField<'plugin::color-picker.color'>
    miscColor4: StringAttribute & CustomField<'plugin::color-picker.color'>
    miscColor5: StringAttribute & CustomField<'plugin::color-picker.color'>
    baseColor1: StringAttribute & CustomField<'plugin::color-picker.color'>
    baseColor2: StringAttribute & CustomField<'plugin::color-picker.color'>
    baseColor3: StringAttribute & CustomField<'plugin::color-picker.color'>
    baseColor4: StringAttribute & CustomField<'plugin::color-picker.color'>
    baseColor5: StringAttribute & CustomField<'plugin::color-picker.color'>
    baseColor6: StringAttribute & CustomField<'plugin::color-picker.color'>
    baseColor7: StringAttribute & CustomField<'plugin::color-picker.color'>
    baseColor8: StringAttribute & CustomField<'plugin::color-picker.color'>
    baseColor9: StringAttribute & CustomField<'plugin::color-picker.color'>
  }
}

export interface DataContact extends ComponentSchema {
  info: {
    displayName: 'Contact'
    icon: 'address-book'
    description: ''
  }
  attributes: {
    email: EmailAttribute
    phone: StringAttribute
    address: TextAttribute
  }
}

export interface DataDeliverable extends ComponentSchema {
  info: {
    displayName: 'Deliverable'
    icon: 'gift'
    description: ''
  }
  attributes: {
    displayName: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 24
      }> &
      DefaultTo<'Deliverable'>
    reference: StringAttribute & RequiredAttribute
    referenceDisplay: StringAttribute
    icon: EnumerationAttribute<['sketch', 'figma', 'github', 'doc', 'xls']>
    refType: EnumerationAttribute<['link', 'linkOuter']>
  }
}

export interface DataDeliverablesSet extends ComponentSchema {
  info: {
    displayName: 'DeliverablesSet'
    icon: 'archive'
  }
  attributes: {
    displayName: StringAttribute
    deliverables: ComponentAttribute<'data.deliverable', true>
  }
}

export interface DataEntry extends ComponentSchema {
  info: {
    displayName: 'Entry'
    icon: 'clipboard-list'
    description: ''
  }
  attributes: {
    key: StringAttribute
    value: TextAttribute & RequiredAttribute
  }
}

export interface DataSection extends ComponentSchema {
  info: {
    displayName: 'Section'
    icon: 'border-all'
    description: ''
  }
  attributes: {
    displayName: StringAttribute
    deliverables: ComponentAttribute<'data.deliverable', true>
  }
}

export interface DataSet extends ComponentSchema {
  info: {
    displayName: 'Set'
    icon: 'align-justify'
  }
  attributes: {
    value: StringAttribute & RequiredAttribute
  }
}

export interface SharedMetaSocial extends ComponentSchema {
  info: {
    displayName: 'metaSocial'
    icon: 'project-diagram'
  }
  attributes: {
    socialNetwork: EnumerationAttribute<['Facebook', 'Twitter']> & RequiredAttribute
    title: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 60
      }>
    description: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 65
      }>
    image: MediaAttribute
  }
}

export interface SharedSeo extends ComponentSchema {
  info: {
    displayName: 'seo'
    icon: 'search'
    description: ''
  }
  attributes: {
    metaTitle: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 60
      }>
    metaDescription: StringAttribute &
      SetMinMaxLength<{
        minLength: 25
        maxLength: 160
      }>
    metaImage: MediaAttribute
    metaSocial: ComponentAttribute<'shared.meta-social', true>
    keywords: TextAttribute
    metaRobots: StringAttribute
    structuredData: JSONAttribute
    metaViewport: StringAttribute
    canonicalURL: StringAttribute
  }
}

declare global {
  namespace Strapi {
    interface Schemas {
      'admin::permission': AdminPermission
      'admin::user': AdminUser
      'admin::role': AdminRole
      'admin::api-token': AdminApiToken
      'admin::api-token-permission': AdminApiTokenPermission
      'plugin::upload.file': PluginUploadFile
      'plugin::upload.folder': PluginUploadFolder
      'plugin::email-emitter.email': PluginEmailEmitterEmail
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission
      'plugin::users-permissions.role': PluginUsersPermissionsRole
      'plugin::users-permissions.user': PluginUsersPermissionsUser
      'plugin::i18n.locale': PluginI18NLocale
      'plugin::email-designer.email-template': PluginEmailDesignerEmailTemplate
      'plugin::menus.menu': PluginMenusMenu
      'plugin::menus.menu-item': PluginMenusMenuItem
      'plugin::passwordless.token': PluginPasswordlessToken
      'api::base-settings.base-settings': ApiBaseSettingsBaseSettings
      'api::category.category': ApiCategoryCategory
      'api::contact.contact': ApiContactContact
      'api::person.person': ApiPersonPerson
      'api::policy.policy': ApiPolicyPolicy
      'api::policy-acceptance.policy-acceptance': ApiPolicyAcceptancePolicyAcceptance
      'api::post.post': ApiPostPost
      'api::project.project': ApiProjectProject
      'api::tenant.tenant': ApiTenantTenant
      'custom.theme': CustomTheme
      'data.contact': DataContact
      'data.deliverable': DataDeliverable
      'data.deliverables-set': DataDeliverablesSet
      'data.entry': DataEntry
      'data.section': DataSection
      'data.set': DataSet
      'shared.meta-social': SharedMetaSocial
      'shared.seo': SharedSeo
    }
  }
}
