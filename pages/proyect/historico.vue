<script setup lang="ts">

import data from "~/assets/json/data.json"
import {useData} from "~/composables/useData";
import carreras from 'assets/json/carrera.json';
import modalidades from 'assets/json/modalidad.json';
import periodos from "assets/json/periodo.json";
import {ref} from "vue";
import SectionCard from "~/components/dashboard/SectionCard.vue";
import TreemapCharts from "~/components/charts/TreemapCharts.vue";
import SectionGrapOv from "~/components/dashboard/SectionGrapOv.vue";
import SectionGraphF from "~/components/dashboard/historico/SectionGraphF.vue";
import SectionGraphA from "~/components/dashboard/historico/SectionGraphA.vue";

const selectedPeriod = ref('1');

definePageMeta({
  layout: 'dasboradlyt'
});
// filtro de  datos

const filteredData = [2]
const selectedCareerName = "Periodo 1"
const selectedPeriodName = ""
const selectedModalidadName = "Mixta"
const hombres = [50, 65, 3, 0, 2]
const mujeres = [50, 65, 3, 0, 2]
const hombresRango = [50, 65, 3, 0, 2]
const mujeresRango = [50, 65, 3, 0, 2]

const cols2 = ['Ing en sistemas Computacionales', 'gastronmia', 'Ing Petrolera', 'Ing Petrolera', 'Ing Petrolera']
const romws = [
  '-18',
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
  '34+'
]
const cols = ['Intervalo de edad', 'Hombre', 'Mujer']

// Selectores de carrera , periodo  y modalidad
const selectedCareer = ref('1');

const selectedModalidad = ref('1');
const selectedPlan = ref('');

</script>

<template>

  <section id="opcion1" class="section-card mb-4">
    <div class="relative w-full pr-4 max-w-full flex-grow flex-1 ">
      <h5 class="text-h5">Sistema de integración escolar</h5>
      <h1 ref="animatedText" class="text-h1">Población Escolar </h1>
      <section class="flex">
        <SelectInput
            v-model="selectedModalidad"
            :options="modalidades"
            inputId="modad"
            label="Modalidad"/>
      </section>
    </div>
  </section>

  <SectionCard
      :text="'Todos los periodos'"
      :rangoEdadHombre="hombresRango"
      :rangoEdadMujer="mujeresRango"
      :rangoTotal="sumArrays(hombresRango,mujeresRango)"
      :text2="selectedCareerName"
      :text4=" `Modalidad - ${selectedModalidadName}`"/>
  <SectionGraphA
      :cols="cols"
      :height="'390'"
      :hombres="hombresRango"
      :mujeres="mujeresRango"
      :rows="cols2"/>
  <section id="opcion1" class="section-card mb-4">
    <div class="relative w-full pr-4 max-w-full flex-grow flex-1 ">
      <h5 class="text-h5">Sistema de integración escolar</h5>
      <h1 ref="animatedText" class="text-h1">Población Escolar por periodo</h1>
      <section class="flex">
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


    <TreemapCharts/>





  <SectionGraphF
      :cols="cols"
      :height="'390'"
      :hombres="hombresRango"
      :mujeres="mujeresRango"
      :rows="cols2"/>


</template>

<style scoped>

</style>