<script lang="ts" setup>
defineProps({
  items: {
    type: Array,
    reqUired: true
  }
})
</script>

<template>
  <table class="">
    <thead class="">
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.label }}</td>
      </tr>
    </thead>
  </table>
</template>
