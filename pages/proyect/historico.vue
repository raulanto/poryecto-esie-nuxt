<script lang="ts" setup>
import {ref} from "vue";
import {useData} from "~/composables/useData";
import {useDataTremap} from "~/composables/useDataTremap";
import modalidades from 'assets/json/modalidad.json';
import carreras from "assets/json/carrera.json";
import periodos from "assets/json/periodo.json";
import data from "assets/json/data.json";
import SectionCard from "~/components/dashboard/SectionCard.vue";
import SectionGraphF from "~/components/dashboard/historico/SectionGraphF.vue";
import SectionGraphA from "~/components/dashboard/historico/SectionGraphA.vue";
import TreemapCharts from "~/components/charts/TreemapCharts.vue";

const selectedModalidad = ref(1);
const selectedModalidadTre = ref(1);
const selectedPeriod = ref(2);




const selectedCareerName = "Todos los Periodos "
const cols = ['Intervalo de edad', 'Hombre', 'Mujer']

const cols2 = ['Carrera', 'Hombre', 'Mujer']
const {
  filteredDataTremap,
  carrerasArray,
  totalHombres,
  totalMujeres,
  totalSumByCarrera
  // @ts-ignore
} = useDataTremap(data,selectedModalidadTre,selectedPeriod,carreras);


// filtro de  datos
const {
  selectedModalidadName,
  combinedMujeres,
  combinedHombres,
  combinedData
  // @ts-ignore
} = useData(data, selectedModalidad, carreras, modalidades);

definePageMeta({
  layout: 'dasboradlyt'
});
</script>

<template>
  <div>
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
        :rangoEdadHombre="combinedHombres"
        :rangoEdadMujer="combinedMujeres"
        :rangoTotal="sumArrays(combinedHombres,combinedMujeres)"
        :text="'Todos los periodos'"
        :text2="selectedCareerName"
        :text4=" `Modalidad - ${selectedModalidadName}`"/>
    <SectionGraphA :data="combinedData"/>
  </div>

  <div>
    <section id="opcion1" class="section-card mb-4">
      <div class="relative w-full pr-4 max-w-full flex-grow flex-1 ">
        <h5 class="text-h5">Sistema de integración escolar</h5>
        <h1 ref="animatedText" class="text-h1">Población Escolar </h1>
        <section class="flex">
          <SelectInput
              v-model="selectedPeriod"
              :options="periodos" inputId="period"
              label="Periodo"/>
          <SelectInput
              v-model="selectedModalidadTre"
              :options="modalidades"
              inputId="modad"
              label="Modalidad"/>
        </section>
      </div>
    </section>

    <TreemapCharts :series="totalSumByCarrera"/>
    <SectionGraphF :rows="carrerasArray" :hombres="totalHombres" :mujeres="totalMujeres" :cols="cols2" height="340"/>

  </div>




</template>

<style scoped>

</style>