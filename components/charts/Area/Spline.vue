<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import {computed, watch} from 'vue'

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
    data: props.series2
  }
])

let chartOptions: ApexCharts.ApexOptions
chartOptions = {
  chart: {
    height: 350,
    type: 'area'
  },
  colors: ['#1d4ed8', '#fcd34d'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    categories: props.categorias
  }
}

watch(
    () => props.series1,
    (newVal, oldVal) => {
    },
    {deep: true}
)

watch(
    () => props.series2,
    (newVal, oldVal) => {
    },
    {deep: true}
)
</script>

<template>
  <section class="bg-white shadow-md rounded-lg p-4 ">
    <ClientOnly>
      <VueApexCharts
          :height="props.height"
          :options="chartOptions"
          :series="computedSeries"
          type="area"
      />
    </ClientOnly>
  </section>
</template>

<style scoped></style>
