import { NuxtModule } from '@nuxt/schema';

interface AnalyticsModuleParams {
    /**
     * stdout logs about external requests and render time of the page
     * @default true
     */
    verbose: boolean;
    /**
     * To turn on and off the healthcheck route
     * @default true
     */
    healthCheck: boolean;
    /**
     * Healthcheck url path
     * @default '/health'
     */
    healthCheckPath: string;
    /**
     * Pormetheus exporter url path
     * @default '/metrics'
     */
    prometheusPath: string;
}

interface ModuleOptions extends AnalyticsModuleParams {
}
interface ModulePublicRuntimeConfig extends AnalyticsModuleParams {
}
declare const module: NuxtModule<Partial<AnalyticsModuleParams>>;

export { ModuleOptions, ModulePublicRuntimeConfig, module as default };
