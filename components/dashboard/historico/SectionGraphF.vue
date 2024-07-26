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
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">

      <div class="">
        <BarGrouped
            :series1="hombres"
            :series2="mujeres"
            :categorias="rows"
            :height="height"
        ></BarGrouped>
      </div>
      <div class="max-h-[390px] lg:col-span-2">

        <tabla-edad
            :hombres="hombres"
            :mujeres="mujeres"
            :cols="cols"
            :rows="rows"/>
      </div>
    </div>
  </section>


</template>
