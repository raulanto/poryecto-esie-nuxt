<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import {defineProps} from 'vue'



const colors = ['#1e40af', '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa']
const tectFormt ="'Dsitribucion de personas por carrera'"



const series = [
  {
    name: 'Ing en sistemas',
    data: [
      {
        x: 'Periodo 1',
        y: 503,
      },
      {
        x: 'Periodo 2',
        y: 580,
      },
      {
        x: 'Periodo 3',
        y: 135,
      },      {
        x: 'Periodo 4',
        y: 559,
      },      {
        x: 'Periodo 5',
        y: 559,
      },      {
        x: 'Periodo 6',
        y: 559,
      },      {
        x: 'Periodo 7',
        y: 559,
      },
    ],
  },
  {
    name: 'Gastronomia',
    data: [
      {
        x: 'Periodo 1',
        y: 733,
      },
      {
        x: 'Periodo 2',
        y: 385,
      },
      {
        x: 'Periodo 3',
        y: 715,
      },      {
        x: 'Periodo 4',
        y: 559,
      },      {
        x: 'Periodo 5',
        y: 559,
      },      {
        x: 'Periodo 6',
        y: 559,
      },      {
        x: 'Periodo 7',
        y: 559,
      },
    ],
  },
  {
    name: 'Ing en Admin',
    data: [
      {
        x: 'Periodo 1',
        y: 255,
      },
      {
        x: 'Periodo 2',
        y: 211,
      },
      {
        x: 'Periodo 3',
        y: 441,
      },      {
        x: 'Periodo 4',
        y: 559,
      },      {
        x: 'Periodo 5',
        y: 559,
      },      {
        x: 'Periodo 6',
        y: 559,
      },      {
        x: 'Periodo 7',
        y: 559,
      },
    ],
  },
  {
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },{
    name: 'Petrolera',
    data: [
      {
        x: 'Category 1',
        y: 428,
      },
      {
        x: 'Category 2',
        y: 749,
      },
      {
        x: 'Category 3',
        y: 559,
      },      {
        x: 'Category 4',
        y: 559,
      },      {
        x: 'Category 5',
        y: 559,
      },      {
        x: 'Category 6',
        y: 559,
      },      {
        x: 'Category 7',
        y: 559,
      },
    ],
  },
]

let chartOptions: ApexCharts.ApexOptions
chartOptions = {
  chart: {
    height: 350,
    width: 600,
    type: 'line',
  },
  plotOptions: {
    line: {
      isSlopeChart: true,
    },
  },
  tooltip: {
    followCursor: true,
    intersect: false,
    shared: true,
  },

  yaxis: {
    show: true,
    labels: {
      show: true,
    },
  },
  xaxis: {
    position: 'bottom',
  },
  colors: colors,
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left',
  },
  stroke: {
    width: [2, 3, 4, 2],
    dashArray: [0, 0, 5, 2],
    curve: 'smooth',
  }
}
</script>

<template>
  <section class="bg-white shadow-md rounded-lg p-4 ">
    <ClientOnly>
      <VueApexCharts
          type="line"
          height="440"
          :options="chartOptions"
          :series="series"
      ></VueApexCharts>
    </ClientOnly>
  </section>

</template>

<style scoped></style>
