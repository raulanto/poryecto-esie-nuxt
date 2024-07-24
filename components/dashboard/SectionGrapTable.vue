<script setup lang="ts">
import BarGrouped from '@/components/charts/Bar/BarGrouped.vue'
import TablaEdad from '@/components/dashboard/TablaEdad.vue'
import CustomAngleCircle from '@/components/charts/CustomAngleCircle.vue'
import AreaChartVue from "~/components/charts/Area/AreaChartVue.vue";
import Spline from "~/components/charts/Area/Spline.vue";

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
    required: true,
    default: "345"
  }
})
</script>

<template>
  <section class=" rounded-lg border-gray-300 dark:border-gray-600 mb-4">
        <BarGrouped
            :series1="hombres"
            :series2="mujeres"
            :categorias="rows"
            :height="height"
        ></BarGrouped>
  </section>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
    <div class="bg-white border border-gray-100 shadow-md shadow-black/5 rounded-md lg:col-span-2">
      <section class="">
        <tabla-edad :hombres="hombres" :mujeres="mujeres" :cols="cols" :rows="rows"/>
      </section>

    </div>
    <div class="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <custom-angle-circle :series1="hombres" :series2="mujeres"></custom-angle-circle>
    </div>
  </div>
</template>
