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



const series= [
  {
    name: 'Q1 Budget',
    group: 'budget',
    data: [44000, 55000, 41000, 67000, 22000, 43000]
  },
  {
    name: 'Q1 Actual',
    group: 'actual',
    data: [48000, 50000, 40000, 65000, 25000, 40000]
  },
  {
    name: 'Q2 Budget',
    group: 'budget',
    data: [13000, 36000, 20000, 8000, 13000, 27000]
  },
  {
    name: 'Q2 Actual',
    group: 'actual',
    data: [20000, 40000, 25000, 10000, 12000, 28000]
  }
]


let chartOptions: ApexCharts.ApexOptions
chartOptions = {
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  dataLabels: {
    formatter: (val) => {
      return val / 1000 + 'K'
    }
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  xaxis: {
    categories: [
      'Online advertising',
      'Sales Training',
      'Print advertising',
      'Catalogs',
      'Meetings',
      'Public relations'
    ]
  },
  fill: {
    opacity: 1
  },
  colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
  yaxis: {
    labels: {
      formatter: (val) => {
        return val / 1000 + 'K'
      }
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
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
    <ClientOnly>
      <VueApexCharts
          :height="props.height"
          :options="chartOptions"
          :series="series"
          type="bar"
      ></VueApexCharts>
    </ClientOnly>
  </section>
</template>

<style scoped></style>
