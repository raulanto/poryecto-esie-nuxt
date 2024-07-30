<script lang="ts" setup>
defineProps({
  pagina: {
    type: String,
  },
  totalpagina: {
    type:Number,

  }
})


</script>

<template>
  <footer class="bg-gradient-to-r from-white to-secundary-100 h-fit px-4 py-2">
    <p class="text-sm text-white mx-8 text-right">
      Pág. {{ pagina }}/{{ totalpagina }}
    </p>
  </footer>
</template>

<style scoped>

</style>