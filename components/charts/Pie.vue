<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'

const series = [44, 55, 13, 43, 22]

let chartOptions: ApexCharts.ApexOptions
chartOptions = {
  chart: {
    width: 380,
    type: 'pie'
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [
    {
      breakpoint: 680,
      options: {
        chart: {
          width: 600,
          height: 600
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
}
</script>

<template>
  <ClientOnly>

    <VueApexCharts type="pie" height="400" :options="chartOptions" :series="series"></VueApexCharts>
  </ClientOnly>
</template>
