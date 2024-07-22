<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { computed, watch,ref } from 'vue'

// Función para sumar dos arrays
function sumarArrays(arr1: number[], arr2: number[]): number[] {
  let resultado: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    resultado.push(arr1[i] + arr2[i]);
  }
  return resultado;
}

// Definir props
const props = defineProps<{
  series1: number[],
  series2: number[],
}>()



// Computar series sumadas
const series = computed(() => (
   sumarArrays(props.series1, props.series2)
));

console.log(series.value[0])


// Opciones del gráfico
let chartOptions: ApexCharts.ApexOptions = {
  chart: {
    height: 390,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '30%',
        background: 'transparent',
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        }
      },
      barLabels: {
        enabled: true,
        useSeriesColors: true,
        margin: 8,
        fontSize: '16px',
        formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
      },
    }
  },
  colors: ['#1e40af', '#1d4ed8', '#2563eb',
    '#3b82f6','#60a5fa'],
  labels: ['Menor a 20', '20-24', '25-29', '30-34', 'Mayor a 34'],
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        show: true
      }
    }
  }]
}

watch(
  () => props.series1,
  (newVal, oldVal) => {

  },
  { deep: true }
)

watch(
  () => props.series2,
  (newVal, oldVal) => {

  },
  { deep: true }
)





</script>

<template>
  <ClientOnly>
    <VueApexCharts type="radialBar" height="390" :options="chartOptions" :series="series"></VueApexCharts>
  </ClientOnly>
</template>
