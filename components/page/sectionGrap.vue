<script setup lang="ts">
import BarGrouped from '@/components/charts/Bar/BarGrouped.vue'
import TablaEdad from '@/components/dashboard/TablaEdad.vue'
import CustomAngleCircle from '@/components/charts/CustomAngleCircle.vue'

defineProps({
  hombres: {
    type: Array,
    required: true
  },
  mujeres: {
    type: Array,
    required: true
  },
  rows: {
    type: Array,
    required: true
  },
  cols: {
    type: Array,
    required: true
  },
  height: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="rounded-lg border-gray-300 dark:border-gray-600 mb-4">

    <BarGrouped
        :series1="hombres"
        :series2="mujeres"
        :categorias="rows"
        :height="height"
    ></BarGrouped>
  </section>

</template>
