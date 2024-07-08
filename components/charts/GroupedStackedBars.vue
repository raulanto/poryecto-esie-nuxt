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
    name: 'Q1 Budget',
    group: 'budget',
    data: [44000, 55000, 41000, 67000, 22000]
  },
  {
    name: 'Q1 Actual',
    group: 'actual',
    data: [48000, 50000, 40000, 65000, 25000]
  },
  {
    name: 'Q2 Budget',
    group: 'budget',
    data: [13000, 36000, 20000, 8000, 13000]
  },
  {
    name: 'Q2 Actual',
    group: 'actual',
    data: [20000, 40000, 25000, 10000, 12000]
  }
]
let chartOptions: ApexCharts.ApexOptions
chartOptions = {
  chart: {
    type: 'bar',
    height: 350,
    stacked: true
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  dataLabels: {
    formatter: (val) => {
      return val / 1000 + 'K'
    }
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  xaxis: {
    categories: [
      'Online advertising',
      'Sales Training',
      'Print advertising',
      'Catalogs',
      'Meetings'
    ],
    labels: {
      formatter: (val) => {
        return val / 1000 + 'K'
      }
    }
  },
  fill: {
    opacity: 1
  },
  colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  }
}
</script>

<template>
  <VueApexCharts type="bar" height="440" :options="chartOptions" :series="series"></VueApexCharts>
</template>

<style scoped></style>
