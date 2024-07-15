<script lang="ts" setup>
import BarGrouped from '@/components/charts/Bar/BarGrouped.vue'
import TablaEdad from '@/components/dashboard/TablaEdad.vue'

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
        :categorias="rows"
        :height="height"
        :series1="hombres"
        :series2="mujeres"
    ></BarGrouped>
  </section>
  <tabla-edad :cols="cols" :hombres="hombres" :mujeres="mujeres" :rows="rows"/>

</template>
