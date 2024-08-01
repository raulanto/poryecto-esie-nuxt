<!--
<template>
   <section id="opcion1" class="section-card mb-4">
      <div class="relative w-full pr-4 max-w-full flex-grow flex-1 ">
         <h5 class="text-h5">Sistema de integración escolar</h5>
         <h1 ref="animatedText" class="text-h1">Población Escolar</h1>
         <section class="flex">
            <SelectInput
                v-model="selectedCareer"
                :options="carreras" inputId="career"
                label="Carrera"/>
            <SelectInput
                v-model="selectedPeriod"
                :options="periodos" inputId="period"
                label="Periodo"/>
            <SelectInput
                v-model="selectedModalidad"
                :options="modalidades"
                inputId="modad"
                label="Modalidad"/>
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
                type="button"
                @click="generatePDF">
               Generar
            </button>
         </div>
      </div>
   </div>

   &lt;!&ndash; Sección que se va a capturar y convertir a PDF &ndash;&gt;
   <section ref="pag1Ref">
      <Pag1 />
   </section>
   <section ref="pag2Ref">
      <Pag2 />
   </section>
   <section ref="pag3Ref">
      <Pag3 />
   </section>
   <section ref="pag4Ref">
      <Pag4 />
   </section>
   <section ref="pag7Ref">
      <Pag7 />
   </section>

   <Tabla />
</template>
-->


<template>
  <section class="scale-90">
    <pag5></pag5>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import html2canvas from 'html2canvas';
import Pag1 from "~/pages/herramienta/9119A/pag1.vue";
import Pag2 from "~/pages/herramienta/9119A/pag2.vue";
import Pag3 from "~/pages/herramienta/9119A/pag3.vue";
import Pag4 from "~/pages/herramienta/9119A/pag4.vue";
import Pag7 from "~/pages/herramienta/9119A/pag7.vue";
import Tabla from "~/components/herramienta/tabla.vue";
import { useGeneratePDF } from '~/composables/useGeneratePDF';
import Pag5 from "~/pages/herramienta/9119A/pag5.vue";
const pdfMake = useNuxtApp().$pdfMake;

// Referencias a cada sección
const pag1Ref = ref(null);
const pag2Ref = ref(null);
const pag3Ref = ref(null);
const pag4Ref = ref(null);
const pag7Ref = ref(null);

// Usa la función composable
const { generatePDF } = useGeneratePDF();

const generateReportPDF = () => {
   const sections = [pag1Ref.value, pag2Ref.value, pag3Ref.value, pag4Ref.value, pag7Ref.value];
   generatePDF(sections);
   pdfMake
};

/*definePageMeta({
   layout: 'dasboradlyt'
});*/

</script>

