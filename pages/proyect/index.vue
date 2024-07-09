


<template>
	<NuxtLayout name="dasboradlyt">
		<div class="h-auto" >
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
				<SelectInput v-model="selectedCareer" :options="carreras" inputId="career" label="Carrera">
				</SelectInput>
				<SelectInput v-model="selectedPeriod" :options="periodos" inputId="period" label="Periodo"/>
			</section>
			<section
				class="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 mb-4">

				<SectionCard :rangoEdadHombre="rangoEdadHombre" :rangoEdadMujer="rangoEdadMujer" :rangoTotal="rangoTotal"
				             :valorCarrera="valorCarrera" :valorperiodo="valorperiodo"></SectionCard>

			</section>
			<section
				class="rounded-lg ">
				<div
					class="mb-4 border-b border-gray-200 dark:border-gray-700 rounded-lg bg-white"
				>
					<ul
						id="default-styled-tab"
						class="flex flex-wrap justify-center items-center -mb-px text-sm font-medium text-center rounded-lg bg-white shadow-md"
						data-tabs-active-classes="text-orange-600 hover:text-orange-600 dark:text-orange-500 dark:hover:text-orange-500 border-orange-600 dark:border-orange-500"
						data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
						data-tabs-toggle=""
						role="tablist"
					>
						<li class="me-2" role="presentation">
							<button
								id="profile-styled-tab"
								aria-controls="profile"
								aria-selected="false"
								class="inline-block p-4 border-b-2 rounded-t-lg"
								data-tabs-target="#styled-profile"
								role="tab"
								type="button"
							>
								Edades por Rango
							</button>
						</li>
						<li class="me-2" role="presentation">
							<button
								id="dashboard-styled-tab"
								aria-controls="dashboard"
								aria-selected="false"
								class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
								data-tabs-target="#styled-dashboard"
								role="tab"
								type="button"
							>
								Distribucion de Edad
							</button>
						</li>
						<li class="me-2" role="presentation">
							<button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Por plan de estudio</button>
						</li>
					</ul>
				</div>
				<div id="rounded-lg ">
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
					<div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
						<SectionGrap
							:cols="cols"
							:height="'600'"
							:hombres="edadHombre"
							:mujeres="edadMujer"
							:rows="romws"
						/>
					</div>
				</div>
			</section>

		</div>
	</NuxtLayout>
</template>

<script lang="ts" setup>
import {onMounted, ref, watch} from 'vue'
import {useFlowbite} from '~/composables/useFlowbite';
import SelectInput from '~/components/global/SelectInput.vue'
import SectionGrap from '~/components/dashboard/SectionGrap.vue'

import jsonData2 from 'assets/json/poblacion.json'
import jsonData1 from 'assets/json/poblacionRango.json'
import carreras from 'assets/json/carrera.json'
import periodos from 'assets/json/periodo.json'
import SectionCard from "~/components/dashboard/SectionCard.vue";
import SectionGrapOv from '~/components/dashboard/SectionGrapOv.vue'

const selectedCareer = ref('1')
const selectedPeriod = ref('1')
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
console.log(dataMap)

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
})

</script>
