<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { computed, watch,ref } from 'vue'




const colors = ['#1e40af', '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa']


// Definir props
const props = defineProps<{
  series: [],

}>()

watch(
    () => props.series,
    (newVal, oldVal) => {
    },
    { deep: true }
)


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
