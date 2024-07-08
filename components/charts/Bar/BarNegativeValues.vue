<template>
  <VueApexCharts
    type="bar"
    height="440"
    :options="chartOptions"
    :series="computedSeries"
  ></VueApexCharts>
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { defineProps, computed, watch } from 'vue'

const props = defineProps({
  series1: {
    type: Array,
    required: true
  },
  series2: {
    type: Array,
    required: true
  }
})

const categorias = ['Menor a 20', '20-24', '25-29', '30-34', 'Mayor a 34']

const computedSeries = computed(() => [
  {
    name: 'Hombres',
    data: props.series1
  },
  {
    name: 'Mujeres',
    data: props.series2.map((value) => -value) // Negativo para apilar en la dirección opuesta
  }
])

const chartOptions = computed<ApexCharts.ApexOptions>(() => ({
  chart: {
    type: 'bar',
    height: 440,
    stacked: true
  },
  colors: ['#d97706', '#fcd34d'],
  plotOptions: {
    bar: {
      borderRadius: 5,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all',
      horizontal: true,
      barHeight: '80%'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    }
  },
  yaxis: {
    show: true,
    stepSize: 5
  },
  tooltip: {},
  title: {
    text: 'Distribución de Edad por Género'
  },
  xaxis: {
    categories: categorias,
    labels: {
      show: false
    }
  }
}))

// Watch for changes in the series data to update the chart
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

<style scoped></style>
