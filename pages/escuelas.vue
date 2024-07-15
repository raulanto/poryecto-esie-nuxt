<script setup lang="ts">

definePageMeta({
	layout: 'home'
});


</script>

<template>

  <section class="relative flex  flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <h2 class="mb-4 font-bold text-xl text-gray-600">Todas las institcuiones que usan nuestro servicio</h2>
      <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <CardTec></CardTec>
      <CardTec></CardTec>
      <CardTec></CardTec>
      <CardTec></CardTec>
      <CardTec></CardTec>
      <CardTec></CardTec>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>