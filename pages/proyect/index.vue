<script lang="ts" setup>
import {onMounted, ref, watch} from 'vue'
import {useFlowbite} from '~/composables/useFlowbite';
import Tablalist from "~/components/global/tablalist.vue";
import SectionGrap from '~/components/dashboard/SectionGrap.vue'
import SectionCard from "~/components/dashboard/SectionCard.vue";
import SectionGrapOv from '~/components/dashboard/SectionGrapOv.vue'



import jsonData2 from 'assets/json/poblacion.json'
import jsonData1 from 'assets/json/poblacionRango.json'
import carreras from 'assets/json/carrera.json'
import periodos from 'assets/json/periodo.json'
import modalidad from 'assets/json/modalidad.json'

const selectedCareer = ref('1')
const selectedPeriod = ref('1')
const selectedModalidad = ref('1')
const rangoEdadHombre = ref<number[]>([])
const rangoEdadMujer = ref<number[]>([])
const edadHombre = ref<number[]>([])
const edadMujer = ref<number[]>([])
const rangoTotal = ref<number[]>([])
const valorCarrera = ref('')
const valorperiodo = ref('')


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


function sumArrays(array1: number[], array2: number[]): number[] {
  return array1.map((num, idx) => num + (array2[idx] || 0));
}

function generateDataMap(
    jsonData1: any[],
    jsonData2: any[],
    carreras: any[],
    periodos: any[]
): Record<string, any> {
  const dataMap: Record<string, any> = {};
  const carreraMap: Record<number, string> = {};
  const periodoMap: Record<number, string> = {};

  carreras.forEach((carrera) => {
    carreraMap[carrera.value] = carrera.label;
  });

  periodos.forEach((periodo) => {
    periodoMap[periodo.value] = periodo.label;
  });

  jsonData1.forEach((data1) => {
    const carreraLabel = carreraMap[data1.carrera] || 'Unknown';
    const periodoLabel = periodoMap[data1.periodo] || 'Unknown';

    const key1 = `${data1.carrera}_${data1.periodo}`;

    if (!dataMap[key1]) {
      dataMap[key1] = {
        series1: data1.hombres,
        series2: data1.mujeres,
        series3: sumArrays(data1.hombres, data1.mujeres),
        carrera: carreraLabel,
        periodo: periodoLabel
      };
    }


  });

  jsonData2.forEach((data2) => {
    const key1 = `${data2.carrera}_${data2.periodo}`;


    if (dataMap[key1]) {
      dataMap[key1].series4 = data2.hombres;
      dataMap[key1].series5 = data2.mujeres;
    }


  });

  return dataMap;
}


const dataMap = generateDataMap(jsonData1, jsonData2, carreras, periodos)


function updateData() {
  let key = `${selectedCareer.value}_${selectedPeriod.value}`
  let data = dataMap[key]


  if (data) {
    rangoEdadHombre.value = data.series1 || []
    rangoEdadMujer.value = data.series2 || []
    edadMujer.value = data.series5 || []
    edadHombre.value = data.series4 || []
    rangoTotal.value = data.series3 || []
    valorCarrera.value = data.carrera
    valorperiodo.value = data.periodo
  }
}

onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  })
  updateData()
})

watch([selectedCareer, selectedPeriod], updateData)

definePageMeta({
  layout: 'dasboradlyt'
});


</script>


<template>



      <div class="h-auto">
        <section
            class="flex bg-white  flex-col md:flex-row rounded-lg border-gray-100 shadow-md shadow-black/5 dark:border-gray-600 mb-4 p-4 space-y-4 md:space-y-0 md:space-x-4"
        >
          <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 class="text-blueGray-400 font-bold text-6xs">Sistema de integracion escolar</h5>
            <span
                ref="animatedText"
                class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
            >
          Poblacion Escolar</span
            >
          </div>
        </section>
        <section
            class="flex bg-white border-gray-100 shadow-md shadow-black/5 flex-col md:flex-row rounded-lg  dark:border-gray-600 mb-4 p-4 space-y-4 md:space-y-0 md:space-x-4"
        >
          <SelectInput v-model="selectedCareer" :options="carreras" inputId="career" label="Carrera"/>
          <SelectInput v-model="selectedPeriod" :options="periodos" inputId="period" label="Periodo"/>
          <SelectInput v-model="selectedModalidad" :options="modalidad" inputId="modali" label="Modalidad"/>
        </section>
        <section
            class="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 mb-4">

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