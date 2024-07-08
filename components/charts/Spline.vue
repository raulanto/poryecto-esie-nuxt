<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { defineProps } from 'vue'

// const props = defineProps({
//     series: {
//         type: Array,
//         required: false
//     },
//     name: {
//         type: String,
//         required: false
//     },
//     fecha: {
//         type: Array,
//         required: false
//     }
// })
//
// let chartSeries = props.series
// let labelValor = props.name
//
// const datanueva = [
//     {
//         name: labelValor,
//         data: chartSeries
//     }
// ]

// function findMaxMin(array) {
//     if (!Array.isArray(array) || array.length === 0) {
//         throw new Error('El arreglo no debe estar vacío.')
//     }
//     let max = array[0]
//     let min = array[0]
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]
//         }
//         if (array[i] < min) {
//             min = array[i]
//         }
//     }
//     return {max, min}
// }
//
// const result = findMaxMin(props.series)
// const maximo = parseFloat(result.max)
// const minimo = parseFloat(result.min)

const series = [
  {
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  },
  {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }
]
let chartOptions: ApexCharts.ApexOptions
chartOptions = {
  chart: {
    height: 350,
    type: 'area'
  },
  colors: ['#f2751c', '#f2b51c'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-09-19T00:00:00.000Z',
      '2018-09-19T01:30:00.000Z',
      '2018-09-19T02:30:00.000Z',
      '2018-09-19T03:30:00.000Z',
      '2018-09-19T04:30:00.000Z',
      '2018-09-19T05:30:00.000Z',
      '2018-09-19T06:30:00.000Z'
    ]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    }
  }
}
</script>

<template>
  <VueApexCharts type="area" height="440" :options="chartOptions" :series="series"></VueApexCharts>
</template>

<style scoped></style>
