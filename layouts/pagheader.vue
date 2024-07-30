<script lang="ts" setup>
const cicloEscolar = ref("2022-2024")
const pagina = ref("02")
const totalpagina = 12
</script>

<template>
  <section class="bg-white min-h-screen flex flex-col">
    <header>
      <slot name="nav"/>
    </header>
    <article class="flex-grow ">
      <slot name="main"/>
    </article>
    <footer>
      <slot name="footer"/>
    </footer>
  </section>
</template>

<style scoped></style>