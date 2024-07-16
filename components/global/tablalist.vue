<script setup lang="ts">

import SectionGrap from "~/components/dashboard/SectionGrap.vue";
import SectionGrapOv from "~/components/dashboard/SectionGrapOv.vue";
</script>

<template>
  <div
      class="mb-4 border-b border-gray-200 dark:border-gray-700 rounded-lg bg-white"
  >
    <ul
        id="default-styled-tab"
        class="flex flex-wrap justify-center items-center -mb-px text-sm font-medium text-center rounded-lg bg-white shadow-md"
        data-tabs-active-classes="text-orange-600 hover:text-orange-600 dark:text-orange-500 dark:hover:text-orange-500 border-orange-600 dark:border-orange-500"
        data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
        data-tabs-toggle=""
        role="tablist"
    >
      <li class="me-2" role="presentation">
        <button
            id="profile-styled-tab"
            aria-controls="profile"
            aria-selected="false"
            class="inline-block p-4 border-b-2 rounded-t-lg"
            data-tabs-target="#styled-profile"
            role="tab"
            type="button"
        >
          Edades por Rango
        </button>
      </li>
      <li class="me-2" role="presentation">
        <button
            id="dashboard-styled-tab"
            aria-controls="dashboard"
            aria-selected="false"
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            data-tabs-target="#styled-dashboard"
            role="tab"
            type="button"
        >
          Distribucion de Edad
        </button>
      </li>
      <li class="me-2" role="presentation">
        <button
            id="contacts-tab"
            aria-controls="contacts" aria-selected="false"
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            data-tabs-target="#contacts"
            role="tab" type="button">Por plan de estudio
        </button>
      </li>
    </ul>
  </div>
  <div id="rounded-lg ">
  <slot/>
  </div>
</template>

<style scoped>

</style>