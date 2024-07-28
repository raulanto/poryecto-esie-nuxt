<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import {watch} from 'vue'

const props = defineProps({
  series: {
    type: Array,
    required: false
  }
})
watch(
    () => props.series,
    (newVal, oldVal) => {
      // Perform actions when series1 changes if needed
    },
    {deep: true}
)

const colors = ['#1e40af', '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa']
const tectFormt = "'Dsitribucion de personas por carrera'"

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
          :options="chartOptions"
          :series="series"
          height="440"
          type="treemap"
      ></VueApexCharts>
    </ClientOnly>
  </section>

</template>

<style scoped></style>
