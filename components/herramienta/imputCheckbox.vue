<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex items-start mb-6 mt-4 gap-3">
    <label class="block  text-sm text-secundary-50 font-bold " for="remember">{{ name }}</label>
    <div class="flex items-center h-5">
      <input :id="name"
             class="w-4 h-4 text-secundary-50 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
             required
             type="checkbox"
             value=""/>
    </div>
  </div>
</template>

<style scoped>

</style>