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
import Targeta from "~/components/global/targeta.vue";


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

// Selectores de carrera , periodo  y modalidad
const selectedCareer = ref('1');
const selectedPeriod = ref('1');
const selectedModalidad = ref('1');
const selectedPlan = ref('');

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


</script>

<template>
  <div>
    <!--  Sector de select  -->
    <section id="opcion1" class="section-card">
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
    <!--  sector de targetas  -->
    <section id="opcion2">
      <SectionCard :name="'Carrera'" :rangoEdadHombre="hombresRango" :rangoEdadMujer="mujeresRango"
                   :rangoTotal="sumArrays(hombresRango,mujeresRango)"
                   :valorCarrera="selectedCareerName" :valormodalidad="selectedModalidadName"
                   :valorperiodo="selectedPeriodName"/>
    </section>
    <!--  Sector tablas de lista  -->
    <section id="opcion3" class="rounded-lg">
      <tablalist>
        <!--Primer opcion-->
        <div id="styled-profile" aria-labelledby="profile-tab" class="hidden rounded-md" role="tabpanel">
          <div v-if="filteredData">
            <SectionGrapOv :cols="cols" :height="'440'" :hombres="hombresRango" :mujeres="mujeresRango"
                           :rows="cols2"/>
          </div>
          <div v-else>
            <targeta>
              <span class="font-medium">Advertencia!</span> No se encontraron datos de <span
                class="font-medium">{{ selectedCareerName }}</span>, <span
                class="font-medium">{{ selectedPeriodName }} </span> y modalidad <span
                class="font-medium">{{ selectedModalidadName }}</span>
            </targeta>
          </div>
        </div>
        <!--Segunda opcion opcion-->
        <div id="styled-dashboard" aria-labelledby="dashboard-tab" class="hidden rounded-md" role="tabpanel">
          <div v-if="filteredData">
            <SectionGrap :cols="cols" :height="'600'" :hombres="hombres" :mujeres="mujeres" :rows="romws"/>
          </div>
          <div v-else>
            <targeta>
              <span class="font-medium">Advertencia!</span> No se encontraron datos de <span
                class="font-medium">{{ selectedCareerName }}</span>, <span
                class="font-medium">{{ selectedPeriodName }} </span> y modalidad <span
                class="font-medium">{{ selectedModalidadName }}</span>
            </targeta>
          </div>
        </div>
        <!--Tercera opcion opcion-->

        <div id="contacts" aria-labelledby="contacts-tab" class="hidden rounded-md " role="tabpanel">
          <div v-if="filteredPlans">
            <section class="section-card">
              <SelectInput v-model="selectedPlan" :options="filteredPlans" inputId="plan" label="Plan"/>
            </section>
            <SectionCard :rangoEdadHombre="hombresPlan" :name="'Plan'" :rangoEdadMujer="mujeresPlan"
                         :rangoTotal="sumArrays(hombresPlan,mujeresPlan)"
                         :valorCarrera="planname" :valormodalidad="selectedModalidadName"
                         :valorperiodo="selectedPeriodName"/>
            <SectionGrapOv :cols="cols" :height="'440'" :hombres="hombresPlan" :mujeres="mujeresPlan"
                           :rows="cols2"/>
          </div>
          <div v-else>
            <targeta>
              <span class="font-medium">Advertencia!</span> No se encontraron datos de <span
                class="font-medium">{{ planname }}</span>, <span class="font-medium">{{ selectedPeriodName }} </span> y
              modalidad <span class="font-medium">{{ selectedModalidadName }}</span>
            </targeta>
          </div>
        </div>
      </tablalist>
    </section>
  </div>

</template>
