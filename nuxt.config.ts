// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  runtimeConfig: {
    resendApiKey: '',
    contactEmail: ''
  },
  i18n : {
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    optimizeMessageBundling: false,
    locales: [
        {
            code: 'en',
            language: 'en-US',
            name: 'English',
            file: 'en.json'
        },
        {
            code: 'es',
            language: 'es-US',
            name: 'Spanish',
            file: 'es.json'
        }
    ]
  }
})