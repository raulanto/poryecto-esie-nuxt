<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import {defineProps} from 'vue'

const colors = ['#1e40af', '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa']
const tectFormt ="'Dsitribucion de personas por carrera'"
const series = [
  {
    data: [
      {
        x: 'Ing en sistemas',
        y: 345
      },
      {
        x: 'gastronomia',
        y: 149
      },
      {
        x: 'Ing en admin',
        y: 184
      },
      {
        x: 'ing Admin',
        y: 55
      }
    ]
  }
]
let chartOptions: ApexCharts.ApexOptions
chartOptions = {
  chart: {
    legend: {
      show: true
    },
    chart: {
      height: 250,
      type: 'treemap'
    },
    title: {
      text: 'Basic Treemap'
    },

  },
  title: {
    text: tectFormt,
    align: 'center'
  },
  colors: colors,
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false
    }
  }
}
</script>

<template>
  <section class="bg-white shadow-md rounded-lg p-4 mb-4">
    <ClientOnly>
      <VueApexCharts
          type="treemap"
          height="440"
          :options="chartOptions"
          :series="series"
      ></VueApexCharts>
    </ClientOnly>
  </section>

</template>

<style scoped></style>
