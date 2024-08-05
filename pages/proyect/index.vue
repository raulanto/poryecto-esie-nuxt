<script setup>
import {ref} from 'vue';
import {useDataFilter} from '~/composables/useDataFilter.ts';
import {useFilteredPlans} from "~/composables/useFilteredPlans.ts";
import {usefilteredDataPlans} from "~/composables/usefilteredDataPlans.ts";
import carreras from 'assets/json/carrera.json';
import periodos from 'assets/json/periodo.json';
import modalidades from 'assets/json/modalidad.json';
import data from "assets/json/data.json"
import plan from "assets/json/planCarrera.json";
import CardText from "~/components/global/CardText.vue";
import Card from "~/components/global/Card.vue";


const cols2 = ['Menor a 20', '20-24', '25-29', '30-34', 'Mayor a 34']
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

const selectedCareer = ref(1);
const selectedPeriod = ref(1);
const selectedModalidad = ref(1);
const selectedPlan = ref();

// filtro de  datos
const {
  filteredData,
  selectedCareerName,
  selectedPeriodName,
  selectedModalidadName,
  hombres,
  mujeres,
  hombresRango,
  mujeresRango
} = useDataFilter(data, carreras, periodos, modalidades, selectedCareer, selectedPeriod, selectedModalidad);

// filtrar plan de acuerdo a carrera periodo y modalidad
const {
  filteredPlans
} = useFilteredPlans(plan, selectedCareer, selectedPeriod, selectedModalidad);

// filtrar los datos de acuerdo a plan
const {
  dataFilter,
  planname,
  hombresPlan,
  mujeresPlan
} = usefilteredDataPlans(plan, selectedPlan)

definePageMeta({
  layout: 'dasboradlyt'
});

onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});


</script>

<template>
  <div class="">
    <!--  Sector de select  -->
    <section id="opcion1" class="section-card mb-4">
      <div class="relative w-full h-full pr-4 max-w-full flex-grow flex-1 ">
        <h5 class="text-h5">Sistema de integración escolar</h5>
        <h1 ref="animatedText" class="text-h1">Población Escolar</h1>
        <section class="flex">
          <SelectInput
              v-model="selectedCareer"
              :options="carreras" inputId="career"
              label="Carrera"/>

        </section>
      </div>

    </section>


    <main class="mb-4">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
        <div
            class=" lg:col-span-2"
        >
          <CardText :text="'Carrera'"
                    :text2="selectedCareerName"
                    :text3="selectedPeriodName"
                    :text4=" `Modalidad - ${selectedModalidadName}`"/>

        </div>
        <div
            class=" lg:col-span-1"
        >
          <Card :color="'#1d4ed8'" :name="'Hombres'" :series="hombresRango"></Card>

        </div>
        <div
            class=" lg:col-span-1"
        >
          <Card :color="'#1d4ed8'" :name="'Hombres'" :series="hombresRango"></Card>

        </div>
        <div
            class=" lg:col-span-1"
        >
          <Card :color="'#1d4ed8'" :name="'Hombres'" :series="hombresRango"></Card>

        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
        <div
            class="section-prueba lg:col-span-2 col-span-1"
        ></div>
        <div
            class="section-prueba lg:col-span-3 col-span-1"
        ></div>

      </div>

      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div
            class="section-prueba"
        ></div>
        <div
            class="section-prueba"
        ></div>

      </div>

    </main>

  </div>

</template>
