<script lang="ts" setup>
import ImputCheckbox from "~/components/herramienta/imputCheckbox.vue";

const cicloEscolar = ref("2022-2024")
const pagina = ref("04")
const totalpagina = 12
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
            CICLO ESCOLAR, <span class="text-secundary-100">{{ cicloEscolar }}</span>
          </h3>
          <h2 class="text-4xl  font-bold text-secundary-100 mt-2 ">
            911.9A
          </h2>
        </div>
      </nav>

    </header>
    <article class="flex-grow ">
      <section class="grid gap-6 mb-6 md:grid-cols-2 mx-14 my-1">
        <section class="my-8">
          <label class="block mb-2 text-sm text-secundary-50 font-bold ">
            3. Número de egresados y titulados en el ciclo escolar <span class="text-secundary-100">
              {{ cicloEscolar }}
              </span>, por sexo y edad.

          </label>

        </section>
      </section>
      <section class="flex  mx-14 my-1">

        <section class="grid gap-6 mb-6 md:grid-cols-3 mx-14 my-1 ">
          <section class="my-8">
            <div class="flex flex-col ">
              <section class="my-8">
                <div class="flex flex-col mt-12 items-center">
                  <div class="grid  md:grid-cols-1 ">
                    <label class="mt-4">
                      21 años o menos
                    </label>
                    <label class="mt-4">
                      22 años </label>
                    <label class="mt-4">
                      23 años
                    </label>
                    <label class="mt-4">
                      24 años
                    </label>
                    <label class="mt-4">
                      25 años
                    </label>
                    <label class="mt-4">
                      26 a 29 años
                    </label>
                    <label class="mt-4">
                      30 años o más </label>
                  </div>
                  <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center ">
                    <label class="mt-4">
                      Total </label>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section class="my-8 ">
            <div>
              <div class="bg-secundary-50 text-white text-center rounded-md">
                Egresados
              </div>
              <div class="grid gap-6 mb-6 md:grid-cols-3 ">

                <section class="my-8">
                  <label class="block mb-2 text-sm text-center text-secundary-50 font-bold ">
                    Hombres
                  </label>
                  <div class="flex flex-col  items-center">
                    <div class="grid  md:grid-cols-5 ">
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/>
                    </div>
                    <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center mt-4">

                      <div class="flex">
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                            maxlength="1"
                            required
                            type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                            maxlength="1"
                            required
                            type="text"/> <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                            maxlength="1"
                            required
                            type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                            maxlength="1"
                            required
                            type="text"/>
                      </div>
                    </div>

                  </div>
                </section>
                <section class="my-8">
                  <label class="block mb-2 text-sm  text-center text-secundary-50 font-bold ">
                    Mujeres
                  </label>
                  <div class="flex flex-col  items-center">
                    <div class="grid  md:grid-cols-5 ">
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/>
                    </div>
                    <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center mt-4">

                      <div class="flex">
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                            maxlength="1"
                            required
                            type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                            maxlength="1"
                            required
                            type="text"/> <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                            maxlength="1"
                            required
                            type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                            maxlength="1"
                            required
                            type="text"/>
                      </div>
                    </div>

                  </div>
                </section>
                <section class="my-8">
                  <label class="block mb-2 text-sm text-center text-secundary-50 font-bold ">
                    Total
                  </label>
                  <div class="flex flex-col  items-center">
                    <div class="grid  md:grid-cols-5 ">
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/>
                    </div>
                    <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center mt-4">

                      <div class="flex">
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                            maxlength="1"
                            required
                            type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                            maxlength="1"
                            required
                            type="text"/> <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                            maxlength="1"
                            required
                            type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                            maxlength="1"
                            required
                            type="text"/>
                      </div>
                    </div>

                  </div>
                </section>
              </div>
            </div>
          </section>
          <section class="my-8 ">
            <div>
              <div class="bg-secundary-50 text-white text-center rounded-md">
                Titulados
              </div>
              <div class="grid gap-6 mb-6 md:grid-cols-3 ">

                <section class="my-8">
                  <label class="block mb-2 text-sm text-center text-secundary-50 font-bold ">
                    Hombres
                  </label>
                  <div class="flex flex-col  items-center">
                    <div class="grid  md:grid-cols-5 ">
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/>
                    </div>
                    <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center mt-4">

                      <div class="flex">
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                            maxlength="1"
                            required
                            type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                            maxlength="1"
                            required
                            type="text"/> <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                            maxlength="1"
                            required
                            type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                            maxlength="1"
                            required
                            type="text"/>
                      </div>
                    </div>

                  </div>
                </section>
                <section class="my-8">
                  <label class="block mb-2 text-sm  text-center text-secundary-50 font-bold ">
                    Mujeres
                  </label>
                  <div class="flex flex-col  items-center">
                    <div class="grid  md:grid-cols-5 ">
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/>
                    </div>
                    <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center mt-4">

                      <div class="flex">
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                            maxlength="1"
                            required
                            type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                            maxlength="1"
                            required
                            type="text"/> <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                            maxlength="1"
                            required
                            type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                            maxlength="1"
                            required
                            type="text"/>
                      </div>
                    </div>

                  </div>
                </section>
                <section class="my-8">
                  <label class="block mb-2 text-sm text-center text-secundary-50 font-bold ">
                    Total
                  </label>
                  <div class="flex flex-col  items-center">
                    <div class="grid  md:grid-cols-5 ">
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/> <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                        maxlength="1"
                        required
                        type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                      <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                          maxlength="1"
                          required
                          type="text"/>
                    </div>
                    <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center mt-4">

                      <div class="flex">
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                            maxlength="1"
                            required
                            type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                            maxlength="1"
                            required
                            type="text"/> <input
                          class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                          maxlength="1"
                          required
                          type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                            maxlength="1"
                            required
                            type="text"/>
                        <input
                            class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                            maxlength="1"
                            required
                            type="text"/>
                      </div>
                    </div>

                  </div>
                </section>
              </div>
            </div>
          </section>
        </section>
      </section>


    </article>
    <footer class="bg-gradient-to-r from-white to-secundary-100 h-fit px-4 py-2">
      <p class="text-sm text-white mx-8 text-right">
        Pág. {{ pagina }}/{{ totalpagina }}
      </p>
    </footer>
  </section>

</template>

<style scoped>

</style>