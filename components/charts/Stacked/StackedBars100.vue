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
    name: 'Marine Sprite',
    data: [44, 55, 41, 37, 22, 43, 21]
  },
  {
    name: 'Striking Calf',
    data: [53, 32, 33, 52, 13, 43, 32]
  },
  {
    name: 'Tank Picture',
    data: [12, 17, 11, 9, 15, 11, 20]
  },
  {
    name: 'Bucket Slope',
    data: [9, 7, 5, 8, 6, 9, 4]
  },
  {
    name: 'Reborn Kid',
    data: [25, 12, 19, 32, 25, 24, 10]
  }
]
let chartOptions: ApexCharts.ApexOptions
chartOptions = {
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    stackType: '100%'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
    text: '100% Stacked Bar'
  },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + 'K'
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40
  }
}
</script>

<template>
  <ClientOnly>
    <VueApexCharts type="bar" height="440" :options="chartOptions" :series="series"></VueApexCharts>
  </ClientOnly>
</template>

<style scoped></style>
