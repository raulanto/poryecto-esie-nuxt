<script lang="ts" setup>
import MultiGroup from "~/components/charts/MultiGroup.vue";

defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class=" rounded-lg border-gray-300 dark:border-gray-600 mb-4">
    <MultiGroup :series="data"/>
  </section>


</template>
