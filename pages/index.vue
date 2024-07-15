// eslint-disable-next-line vue/multi-word-component-names
<script lang="ts" setup>

definePageMeta({
  layout: 'home',
});


</script>
<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <a
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          href="#"
          role="alert"
      >
        <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">Nuevo</span>
        <span class="text-sm font-medium">¡EsieGaph ya está disponible! Ver las novedades</span>
        <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              clip-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              fill-rule="evenodd"
          ></path>
        </svg>
      </a>
      <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        El mejor sistema Escolar
      </h1>
      <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        Sistema que brinda atencion al Analisis de Estadística de Educación Superior de las instituciones
      </p>
      <div
          class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
      >
        <a
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            href="#"
        >
          Conocer mas
          <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                clip-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill-rule="evenodd"
            ></path>
          </svg>
        </a>

      </div>
    </div>
  </section>

  <section class="bg-white dark:bg-gray-900">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <img
          alt="dashboard image"
          class="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
      />
      <img
          alt="dashboard image"
          class="w-full hidden dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
      />
      <div class="mt-4 md:mt-0">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Explora el las estadisticas de tu escuela para conocer mejor la poblacion estudiantil
        </h2>
        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">

        </p>
        <a
            class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            href="#"
        >
          Conocer
          <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                clip-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>



</template>
