<script lang="ts" setup>
defineProps({
  cicloEscolar: {
    type: String,

  }
})


</script>

<template>
  <nav class="w-full  text-white bg-secundary-50 h-28 flex items-center justify-between px-8">
    <div class=" ">
      <h3 class="text-xl">
        Por Carrera
      </h3>
      <h4 class="text-xl text-secundary-100">
        Información del ciclo actual {{ cicloEscolar }}
      </h4>
    </div>
    <div class="text-right">
      <h3 class="text-xl">
        CICLO ESCOLAR, <span class="text-secundary-100">{{ cicloEscolar }}</span>
      </h3>
      <h2 class="text-4xl  font-bold text-secundary-100 mt-2 ">
        911.9A
      </h2>
    </div>
  </nav>
</template>

<style scoped>

</style>