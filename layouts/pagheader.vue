<script setup lang="ts">
const cicloEscolar = ref("2022-2024")
const pagina =ref("02")
const totalpagina=12
</script>

<template>
  <section class="bg-white min-h-screen flex flex-col">
    <header>
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
            CICLO ESCOLAR, <span class="text-secundary-100">{{cicloEscolar}}</span>
          </h3>
          <h2 class="text-4xl  font-bold text-secundary-100 mt-2 ">
            911.9A
          </h2>
        </div>
      </nav>

    </header>
    <article class="flex-grow ">
      <slot/>
    </article>

    <footer class="bg-gradient-to-r from-white to-secundary-100 h-fit px-4 py-2">
      <p class="text-sm text-white mx-8 text-right">
        Pág. {{ pagina }}/{{ totalpagina}}
      </p>
    </footer>
  </section>
</template>

<style scoped>

</style>