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
    data: [
      {
        x: 'New Delhi',
        y: 218
      },
      {
        x: 'Kolkata',
        y: 149
      },
      {
        x: 'Mumbai',
        y: 184
      },
      {
        x: 'Ahmedabad',
        y: 55
      },
      {
        x: 'Bangaluru',
        y: 84
      },
      {
        x: 'Pune',
        y: 31
      },
      {
        x: 'Chennai',
        y: 70
      },
      {
        x: 'Jaipur',
        y: 30
      },
      {
        x: 'Surat',
        y: 44
      },
      {
        x: 'Hyderabad',
        y: 68
      },
      {
        x: 'Lucknow',
        y: 28
      },
      {
        x: 'Indore',
        y: 19
      },
      {
        x: 'Kanpur',
        y: 29
      }
    ]
  }
]
let chartOptions: ApexCharts.ApexOptions
chartOptions = {
  chart: {
    legend: {
      show: false
    },
    chart: {
      height: 350,
      type: 'treemap'
    },
    title: {
      text: 'Basic Treemap'
    }
  }
}
</script>

<template>
  <VueApexCharts
    type="treemap"
    height="440"
    :options="chartOptions"
    :series="series"
  ></VueApexCharts>
</template>

<style scoped></style>
