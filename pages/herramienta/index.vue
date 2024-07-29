<script setup>
import Pag1 from "~/pages/herramienta/9119A/pag1.vue";
import carreras from "assets/json/carrera.json";
import Tabla from "~/components/herramienta/tabla.vue";
import Pag2 from "~/pages/herramienta/9119A/pag2.vue";
import Pag3 from "~/pages/herramienta/9119A/pag3.vue";
import Pag4 from "~/pages/herramienta/9119A/pag4.vue";


definePageMeta({layout: 'dasboradlyt'});
</script>

<template>

  <section id="opcion1" class="section-card mb-4">
    <div class="relative w-full pr-4 max-w-full flex-grow flex-1 ">
      <h5 class="text-h5">Generacion de reportes</h5>
      <h1 ref="animatedText" class="text-h1">911.9A</h1>
      <section class="flex">
        <SelectInput
            v-model="selectedCareer"
            :options="carreras" inputId="career"
            label="Carrera"/>

      </section>
    </div>
  </section>


  <div class="w-full mb-4">

    <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div class="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
        <div>
          <h5 class="mr-3 font-semibold dark:text-white">Crear Reporte</h5>
        </div>
        <button
            class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            type="button" @click="generatePDF">

          Generar
        </button>
      </div>
    </div>
  </div>

  <section slot="pdf-content">
    <section class="section-card">
      <section class="overflow-scroll h-[600px]   gap-3">
        <pag1 class="my-2"></pag1>
        <pag2 class="my-2"></pag2>
        <pag3 class="my-2"></pag3>
        <pag4 class="my-2"></pag4>
      </section>
    </section>
  </section>
  <tabla></tabla>

  <!--<section class="  ">-->
  <!--    <pag4/>-->
  <!--  </section>-->
</template>
