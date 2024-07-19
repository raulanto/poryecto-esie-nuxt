<script lang="ts" setup>
import {useDataHandler} from '~/composables/useDataHandler';
import Tablalist from "~/components/global/tablalist.vue";
import SectionGrap from '~/components/dashboard/SectionGrap.vue';
import SectionCard from "~/components/dashboard/SectionCard.vue";
import SectionGrapOv from '~/components/dashboard/SectionGrapOv.vue';
import modalidad from 'assets/json/modalidad.json'
import jsonData2 from 'assets/json/poblacion.json';
import jsonData1 from 'assets/json/poblacionRango.json';
import carreras from 'assets/json/carrera.json';
import periodos from 'assets/json/periodo.json';

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
  updateData
} = useDataHandler(jsonData1, jsonData2, carreras, periodos);

definePageMeta({
  layout: 'dasboradlyt'
});
</script>


<template>


  <div class="h-auto">
    <section class="section-card ">
      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
        <h5 class="text-h5">Sistema de integracion escolar</h5>
        <h1
            ref="animatedText"
            class="text-h1">
          Poblacion Escolar
        </h1>
      </div>
    </section>
    <section
        class="section-card">
      <SelectInput v-model="selectedCareer" :options="carreras" inputId="career" label="Carrera"/>
      <SelectInput v-model="selectedPeriod" :options="periodos" inputId="period" label="Periodo"/>
      <SelectInput v-model="selectedModalidad" :options="modalidad" inputId="modali" label="Modalidad"/>
    </section>
    <section>
      <SectionCard :rangoEdadHombre="rangoEdadHombre" :rangoEdadMujer="rangoEdadMujer" :rangoTotal="rangoTotal"
                   :valorCarrera="valorCarrera" :valorperiodo="valorperiodo"></SectionCard>
    </section>
    <section
        class="rounded-lg ">
      <tablalist>
        <div
            id="styled-profile"
            aria-labelledby="profile-tab"
            class="hidden rounded-md "
            role="tabpanel"
        >
          <SectionGrapOv
              :cols="cols"
              :height="'440'"
              :hombres="rangoEdadHombre"
              :mujeres="rangoEdadMujer"
              :rows="cols2"
          />
        </div>
        <div
            id="styled-dashboard"
            aria-labelledby="dashboard-tab"
            class="hidden  rounded-md "
            role="tabpanel"
        >
          <SectionGrap
              :cols="cols"
              :height="'600'"
              :hombres="edadHombre"
              :mujeres="edadMujer"
              :rows="romws"
          />
        </div>
        <div
            id="contacts" aria-labelledby="contacts-tab" class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            role="tabpanel">
          <SectionGrap
              :cols="cols"
              :height="'600'"
              :hombres="edadHombre"
              :mujeres="edadMujer"
              :rows="romws"
          />
        </div>
      </tablalist>
    </section>
  </div>


</template>