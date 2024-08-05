<!--<template>
  <section id="opcion1" class="section-card mb-4">
    <div class="relative w-full pr-4 max-w-full flex-grow flex-1 ">
      <h5 class="text-h5">Sistema de integración escolar</h5>
      <h1 ref="animatedText" class="text-h1">Población Escolar</h1>
      <section class="flex">
        <SelectInput v-model="selectedCareer" :options="carreras" inputId="career" label="Carrera"/>

      </section>
    </div>
  </section>

-->


<template>
  <div class="w-full mb-4">
    <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg p-4">
      <div class="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
        <div>
          <h5 class="mr-3 font-semibold dark:text-white">Crear Reporte</h5>
        </div>
        <button
            class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700
            hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700
            focus:outline-none dark:focus:ring-primary-800"
            type="button"
            @click="generatePDF()">
          Generar
        </button>
      </div>
      <!-- Barra de progreso -->
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 relative p-1">
        <div :style="{ width: progress + '%' }" class="bg-blue-600 h-2.5 rounded-full"></div>
        <span class="absolute inset-0 flex items-center justify-center text-xs text-gray-700 dark:text-gray-300 ">
          {{ Math.round(progress) }}%
        </span>
      </div>
    </div>
  </div>


  <!-- Sección que se va a capturar y convertir a PDF -->
  <div class="section-card flex-col">
    <div class="">
      <section ref="pag1Ref">
        <Pag1/>
      </section>
      <section ref="pag2Ref">
        <Pag2/>
      </section>
      <section ref="pag3Ref">
        <Pag3/>
      </section>
      <section ref="pag4Ref">
        <Pag4/>
      </section>
      <section ref="pag7Ref">
        <Pag7/>
      </section>
    </div>
  </div>

  <Tabla/>

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

const pdfMake = useNuxtApp().$pdfMake;

// Referencias a cada sección
const pag1Ref = ref(null);
const pag2Ref = ref(null);
const pag3Ref = ref(null);
const pag4Ref = ref(null);
const pag7Ref = ref(null);
const progress = ref(0);
const pageSize = {width: 1805, height: 1290};

const generatePDF = async () => {
  const sections = [pag1Ref.value, pag2Ref.value, pag3Ref.value, pag4Ref.value, pag7Ref.value];

  if (!Array.isArray(sections) || sections.length === 0) {
    console.error('Sections must be a non-empty array');
    return;
  }

  const images = [];

  // Captura cada sección individualmente
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (!section) continue;

    try {
      // Actualiza el progreso antes de capturar
      progress.value = ((i) / sections.length) * 100; // Antes de la captura
      await new Promise(resolve => setTimeout(resolve, 100)); // Simula un pequeño retraso para ver el progreso

      const canvas = await html2canvas(section, {scale: 2});
      const imgData = canvas.toDataURL('image/png');
      images.push(imgData);

      // Actualiza el progreso después de capturar
      progress.value = ((i + 1) / sections.length) * 100; // Después de la captura
    } catch (error) {
      console.error('error en capturar la sección:', error);
    }
  }

  if (images.length === 0) {
    console.error('ninguna imagen');
    return;
  }

  const docDefinition = {
    pageSize: {
      width: pageSize.width,
      height: pageSize.height
    },
    pageMargins: [0, 0, 0, 0],
    content: images.map(imgData => ({
      image: imgData,
      width: pageSize.width,
      height: pageSize.height
    }))
  };

  try {
    // Genera y descarga el PDF
    progress.value = 100; // Asegura que el progreso esté al 100% antes de la descarga
    pdfMake.createPdf(docDefinition).download('sample.pdf');
  } catch (error) {
    console.error('error al generar pdf:', error);
  }
};


definePageMeta({
  layout: 'dasboradlyt'
});

</script>
