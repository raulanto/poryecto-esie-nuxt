<script setup lang="ts">
import Tabla from '@/components/global/TablaTotal.vue'

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
  }
})
</script>

<template>
  <section class="">
    <Tabla :cols="cols" :hombres="hombres" :mujeres="mujeres" :rows="rows"></Tabla>
  </section>
</template>
