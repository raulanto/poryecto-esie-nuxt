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
import SectionCard from "~/components/dashboard/SectionCard.vue";
import SectionGrapOv from "~/components/dashboard/SectionGrapOv.vue";
import SectionGrap from "~/components/dashboard/SectionGrap.vue";
import SectionGrapTable from "~/components/dashboard/SectionGrapTable.vue";
import CardText from "~/components/global/CardText.vue";
import Card from "~/components/global/Card.vue";
import BarGrouped from "~/components/charts/Bar/BarGrouped.vue";


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

      <section class="">
         <div class="parent">
            <div class="div1  ">
               <CardText :text="'Carrera'"
                         :text2="selectedCareerName"
                         :text4=" `Modalidad - ${selectedModalidadName}`"
                         :text3="selectedPeriodName"/>
            </div>
            <div class="div2 ">
               <Card :color="'#1d4ed8'" :name="'Hombres'" :series="hombresRango"></Card>
            </div>
            <div class="div3 ">
               <Card :color="'#1d4ed8'" :name="'Hombres'" :series="hombresRango"></Card>

            </div>
            <div class="div4 ">
               <Card :color="'#1d4ed8'" :name="'Hombres'" :series="hombresRango"></Card>

            </div>
            <div class="div5 ">

            </div>
            <div class="div6 section-card"></div>
            <div class="div7 section-card"></div>
            <div class="div8 section-card"></div>
         </div>
      </section>

   </div>

</template>
<style scoped>
.parent {
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   grid-template-rows: repeat(5, 1fr);
   grid-column-gap: 1rem;
   grid-row-gap: 1rem;
}

.div1 {
   grid-area: 1 / 1 / 2 / 3;
}

.div2 {
   grid-area: 1 / 3 / 2 / 4;
}

.div3 {
   grid-area: 1 / 4 / 2 / 5;
}

.div4 {
   grid-area: 1 / 5 / 2 / 6;
}

.div5 {
   grid-area: 2 / 1 / 4 / 3;
}

.div6 {
   grid-area: 4 / 1 / 6 / 4;
}

.div7 {
   grid-area: 2 / 3 / 4 / 6;
}

.div8 {
   grid-area: 4 / 4 / 6 / 6;
}


</style>
