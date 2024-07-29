// https://nuxt.com/docs/api/configuration/nuxt-config
import VueApexCharts from 'vue3-apexcharts';
export default defineNuxtConfig({
    // Error de apexcharts
    build: {
        transpile: ['vue3-apexcharts']
    },
    compatibilityDate: '2024-04-03',
    css: ['/assets/css/main.css'],
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    modules: [
        "@nuxtjs/tailwindcss",
        '@vueuse/nuxt',
        '@nuxtjs/google-fonts',
        "nuxt-driver.js"
    ],

    plugins: [
        {src: '~/plugins/vue-apexcharts.js', ssr: false},
        { src: '@/plugins/vue-html2pdf.js', mode: 'client' }

    ],
    postcss: {
        plugins: {
            tailwindcss: {
                cssPath: ['~/assets/css/tailwind.css', {injectPosition: "first"}],
                configPath: 'tailwind.config',
            },
            autoprefixer: {},
        },
    },
    vite: {
        ssr: {
            noExternal: ['vue3-apexcharts']
        }
    },


})