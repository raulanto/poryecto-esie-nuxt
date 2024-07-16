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
        { src: '~/plugins/vue-apexcharts.js', ssr: false },
        { src: '~/plugins/vue-html2pdf', mode: 'client' }
    ],
    compatibilityDate: '2024-04-03',
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

      'nuxt-pdfeasy',
    ],
    pdfeasy: {
        defaultFileName: 'document.pdf',
        options: {
            margin: 1,
            filename: 'documento.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        },
    },
    css: ['/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {
                cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
                configPath: 'tailwind.config',
            },
            autoprefixer: {},
        },
    },


})