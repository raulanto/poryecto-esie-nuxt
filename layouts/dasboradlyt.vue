<script lang="ts" setup>

</script>

<template>
  <section class="antialiased fondo min-h-screen bg-gray-50 dark:bg-gray-800 bg-cover bg-bottom ">
    <Sidebar/>
    <section class="md:scroll-ml-60 h-full pt-20 px-14 dark:border-gray-600 dark:bg-gray-900 md:container md:mx-auto sm:container ">
      <slot/>
    </section>
  </section>
  <footer-dasborad/>
</template>

<style scoped>

</style>