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
    name: 'Actual',
    data: [
      {
        x: '2011',
        y: 12,
        goals: [
          {
            name: 'Expected',
            value: 14,
            strokeWidth: 2,
            strokeDashArray: 2,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2012',
        y: 44,
        goals: [
          {
            name: 'Expected',
            value: 54,
            strokeWidth: 5,
            strokeHeight: 10,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2013',
        y: 54,
        goals: [
          {
            name: 'Expected',
            value: 52,
            strokeWidth: 10,
            strokeHeight: 0,
            strokeLineCap: 'round',
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2014',
        y: 66,
        goals: [
          {
            name: 'Expected',
            value: 61,
            strokeWidth: 10,
            strokeHeight: 0,
            strokeLineCap: 'round',
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2015',
        y: 81,
        goals: [
          {
            name: 'Expected',
            value: 66,
            strokeWidth: 10,
            strokeHeight: 0,
            strokeLineCap: 'round',
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2016',
        y: 67,
        goals: [
          {
            name: 'Expected',
            value: 70,
            strokeWidth: 5,
            strokeHeight: 10,
            strokeColor: '#775DD0'
          }
        ]
      }
    ]
  }
]
let chartOptions: ApexCharts.ApexOptions
chartOptions = {
  chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  colors: ['#f2751c'],
  dataLabels: {
    formatter: function (val, opt) {
      const goals = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals

      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: ['#0591e8', '#f2751c']
    }
  }
}
</script>

<template>
  <ClientOnly>
    <VueApexCharts type="bar" height="440" :options="chartOptions" :series="series"></VueApexCharts>
  </ClientOnly>
</template>

<style scoped></style>
