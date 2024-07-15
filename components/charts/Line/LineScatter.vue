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
    name: 'Points',
    type: 'scatter',

    //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
    data: [
      {
        x: 1,
        y: 2.14
      },
      {
        x: 1.2,
        y: 2.19
      },
      {
        x: 1.8,
        y: 2.43
      },
      {
        x: 2.3,
        y: 3.8
      },
      {
        x: 2.6,
        y: 4.14
      },
      {
        x: 2.9,
        y: 5.4
      },
      {
        x: 3.2,
        y: 5.8
      },
      {
        x: 3.8,
        y: 6.04
      },
      {
        x: 4.55,
        y: 6.77
      },
      {
        x: 4.9,
        y: 8.1
      },
      {
        x: 5.1,
        y: 9.4
      },
      {
        x: 7.1,
        y: 7.14
      },
      {
        x: 9.18,
        y: 8.4
      }
    ]
  },
  {
    name: 'Line',
    type: 'line',
    data: [
      {
        x: 1,
        y: 2
      },
      {
        x: 2,
        y: 3
      },
      {
        x: 3,
        y: 4
      },
      {
        x: 4,
        y: 5
      },
      {
        x: 5,
        y: 6
      },
      {
        x: 6,
        y: 7
      },
      {
        x: 7,
        y: 8
      },
      {
        x: 8,
        y: 9
      },
      {
        x: 9,
        y: 10
      },
      {
        x: 10,
        y: 11
      }
    ]
  }
]

let chartOptions: ApexCharts.ApexOptions
chartOptions = {
  chart: {
    height: 350,
    type: 'line'
  },
  fill: {
    type: 'solid'
  },
  markers: {
    size: [6, 0]
  },
  tooltip: {
    shared: false,
    intersect: true
  },
  legend: {
    show: false
  },
  xaxis: {
    type: 'numeric',
    min: 0,
    max: 12,
    tickAmount: 12
  }
}
</script>

<template>
  <ClientOnly>

    <VueApexCharts type="line" height="440" :options="chartOptions" :series="series"></VueApexCharts>
  </ClientOnly>
</template>
