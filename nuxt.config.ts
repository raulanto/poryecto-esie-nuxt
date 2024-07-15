// https://nuxt.com/docs/api/configuration/nuxt-config
import VueApexCharts from 'vue3-apexcharts';
export default defineNuxtConfig({
    // Error de apexcharts
    build: {
        transpile: ['vue3-apexcharts']
    },
    vite: {
        ssr: {
            noExternal: ['vue3-apexcharts']
        }
    },
    plugins: [
        { src: '~/plugins/vue-apexcharts.js', ssr: false }
    ],
    compatibilityDate: '2024-04-03',
    devtools: {
      enabled: true,
      timeline: {
        enabled: true,
      },
    },
    modules: ["@nuxtjs/tailwindcss", '@vueuse/nuxt', ],
    css: ['/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

})