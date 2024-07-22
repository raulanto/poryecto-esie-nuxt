<script lang="ts" setup>
import {useDataHandler} from '~/composables/useDataHandler';
import {useFilteredPlans} from "~/composables/useFilteredPlans";
import {onMounted} from 'vue';
import {driver} from "driver.js";
import {useFlowbite} from "~/composables/useFlowbite";
import jsonData2 from 'assets/json/poblacion.json';
import jsonData1 from 'assets/json/poblacionRango.json';
import carreras from 'assets/json/carrera.json';
import periodos from 'assets/json/periodo.json';
import plan from 'assets/json/planCarrera.json';
import modalidades from 'assets/json/modalidad.json';

import SectionCard from "~/components/dashboard/SectionCard.vue";
import SectionGrapOv from "~/components/dashboard/SectionGrapOv.vue";
import SectionGrap from "~/components/dashboard/SectionGrap.vue";

const cols2 = ['Menor a 20', '20-24', '25-29', '30-34', 'Mayor a 34']
const romws = [
  'Menores a 18',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  'Mayores de 34'
]
const cols = ['Intervalo de edad', 'Hombre', 'Mujer']
const {
  selectedCareer,
  selectedPeriod,
  selectedModalidad,
  rangoEdadHombre,
  rangoEdadMujer,
  edadHombre,
  edadMujer,
  rangoTotal,
  valorCarrera,
  valorperiodo,
  valormodalidad,
  updateData
} = useDataHandler(jsonData1, jsonData2, carreras, periodos, modalidades);


const {
  selectedPlan,
  filteredPlans
} = useFilteredPlans(plan, selectedCareer, selectedPeriod, selectedModalidad);


onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
  const driverL = driver({
    showProgress: true,
    animate: true,

    steps: [
      {
        element: "#welcome",
        popover: {
          title: "Bienvenido a EsieGraph",
          description:
              "Sistema estadistico de Poblacion",
          side: "bottom",
        },
      },
      {
        element: "#opcion1",
        popover: {
          title: "Selecion de Carrera y periodo",
          description:
              "Esta opcion permite elegir el periodo y la carrera",
          side: "bottom",
        },
      },
      {
        element: "#opcion2",
        popover: {
          title: "Targetas",
          description:
              "Aqui se mostrara un conteo general de Hombres y mujeres",
          side: "bottom",
        },
      },
      {
        element: "#opcion3",
        popover: {
          title: "Graficas",
          description:
              "Se mustran los resultados obtenidos",
          side: "top",
        },
      },
    ],
  });

});


definePageMeta({
  layout: 'dasboradlyt'
});
</script>

<template>
  <div id="welcome" class="h-auto">
    <section class="section-card">
      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
        <h5 class="text-h5">Sistema de integración escolar</h5>
        <h1 ref="animatedText" class="text-h1">Población Escolar</h1>
        <section class="flex">
          <SelectInput v-model="selectedCareer" :options="carreras" inputId="career" label="Carrera"/>
          <SelectInput v-model="selectedPeriod" :options="periodos" inputId="period" label="Periodo"/>
          <SelectInput v-model="selectedModalidad" :options="modalidades" inputId="modad" label="Modalidad"/>
        </section>

      </div>

    </section>

    <section id="opcion2">
      <SectionCard :rangoEdadHombre="rangoEdadHombre" :rangoEdadMujer="rangoEdadMujer" :rangoTotal="rangoTotal"
                   :valorCarrera="valorCarrera" :valormodalidad="valormodalidad" :valorperiodo="valorperiodo"/>
    </section>
    <section id="opcion3" class="rounded-lg">
      <tablalist>
        <div id="styled-profile" aria-labelledby="profile-tab" class="hidden rounded-md" role="tabpanel">
          <SectionGrapOv :cols="cols" :height="'440'" :hombres="rangoEdadHombre" :mujeres="rangoEdadMujer"
                         :rows="cols2"/>
        </div>
        <div id="styled-dashboard" aria-labelledby="dashboard-tab" class="hidden rounded-md" role="tabpanel">
          <SectionGrap :cols="cols" :height="'600'" :hombres="edadHombre" :mujeres="edadMujer" :rows="romws"/>
        </div>
        <div id="contacts" aria-labelledby="contacts-tab" class="hidden rounded-md " role="tabpanel">
          <section class="section-card">
            <SelectInput v-model="selectedPlan" :options="filteredPlans" inputId="plan" label="Plan"/>
          </section>

        </div>
      </tablalist>
    </section>
  </div>
</template>