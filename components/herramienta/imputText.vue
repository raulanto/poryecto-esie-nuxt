<script setup lang="ts">
defineProps({
  name: {
    type: String,
  },
})
</script>

<template>
  <div class="flex mx-4 mb-6 mt-4 ">
    <label class="block  text-sm text-secundary-50 font-bold mr-2" for="remember">{{ name }}</label>
    <div class="flex items-center h-5">
      <input :id="name"
             class="w-11 h-11 font-extrabold  text-xl text-center  text-secundary-50 border border-secundary-50 rounded focus:ring-3 focus:ring-secundary-50 "
             required
             type="text"
             value=""/>
    </div>
  </div>
</template>
