<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import { computed, watch } from 'vue'

const props = defineProps({
  series1: {
    type: Array,
    required: false
  },
  series2: {
    type: Array,
    required: false
  },
  categorias: {
    type: Array,
    required: false
  },
  height: {
    type: String,
    required: false
  }
})
const computedSeries = computed(() => [
  {
    name: 'Hombres',
    data: props.series1
  },
  {
    name: 'Mujeres',
    data: props.series2 // Negativo para apilar en la dirección opuesta
  }
])

let chartOptions: ApexCharts.ApexOptions
chartOptions = {
  chart: {
    type: 'bar',
    height: 350,
    fontFamily: 'Inter, sans-serif'
  },
  colors: ['#d97706', '#fcd34d'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
      borderRadiusApplication: 'end',
      endingShape: 'rounded',
      borderRadius: 2,
      dataLabels: {
        position: 'top'
      }
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: 'Inter, sans-serif'
    }
  },
  dataLabels: {
    enabled: false,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#fff']
    }
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['transparent']
  },

  xaxis: {
    categories: props.categorias
  }
}

watch(
  () => props.series1,
  (newVal, oldVal) => {
    // Perform actions when series1 changes if needed
  },
  { deep: true }
)

watch(
  () => props.series2,
  (newVal, oldVal) => {
    // Perform actions when series2 changes if needed
  },
  { deep: true }
)
</script>

<template>
  <section class="bg-white shadow-md rounded-lg p-4 ">
    <VueApexCharts
      :height="props.height"
      :options="chartOptions"
      :series="computedSeries"
      type="bar"
    ></VueApexCharts>
  </section>
</template>

<style scoped></style>
