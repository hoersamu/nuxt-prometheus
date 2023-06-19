
import { ModuleOptions, ModuleHooks, ModuleRuntimeConfig, ModulePublicRuntimeConfig } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['prometheus']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['prometheus']?: ModuleOptions }
  interface NuxtHooks extends ModuleHooks {}
  interface RuntimeConfig extends ModuleRuntimeConfig {}
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['prometheus']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['prometheus']?: ModuleOptions }
  interface NuxtHooks extends ModuleHooks {}
  interface RuntimeConfig extends ModuleRuntimeConfig {}
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
}


export { default } from './module'
