<script lang="ts" setup>
import ImputCheckbox from "~/components/herramienta/imputCheckbox.vue";

const cicloEscolar = ref("2022-2024")
const pagina = ref("03")
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

      <section>
        <h4 class=" mx-14 my-2 text-secundary-50  text-xl font-bold">
          II. ALUMNOS DE PRIMER INGRESO DEL CICLO ANTERIOR
        </h4>
        <section class="grid gap-6 mb-6 md:grid-cols-2 mx-14 my-1">
          <section class="my-8">
            <label class="block mb-2 text-sm text-secundary-50 font-bold ">
              1. Número de periodos de inscripción a primer ingreso que ofreció la facultad o escuela durante el ciclo
              escolar
              <span class="text-secundary-100">
              {{ cicloEscolar }}
              </span>
            </label>

          </section>
          <section class="my-8 flex justify-between">
            <div class="flex flex-col  mb-2 space-x-2 justify-center  ">
              <label class="block mb-2  text-secundary-50 font-bold ">
                Periodos
              </label>
              <div class="flex items-center justify-center">
                <input
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-lg"
                    maxlength="1"
                    required
                    type="text"/>
                <input>
              </div>
            </div>


          </section>
        </section>
        <section class="grid gap-6 mb-6 md:grid-cols-2 mx-14 my-1">
          <section class="my-8">
            <label class="block mb-2 text-sm text-secundary-50 font-bold ">

              2. Número de alumnos de primer ingreso a la carrera, del ciclo escolar <span
                class="text-secundary-100 font-bold">{{ cicloEscolar }}</span> por sexo.
            </label>

          </section>
          <section class="flex justify-between">
            <section class="my-8 flex justify-between">
              <div class="flex flex-col  mb-2 space-x-2 justify-center  ">
                <label class="block mb-2  text-secundary-50 font-bold ">
                  Hombres
                </label>
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


            </section>
            <section class="my-8 flex justify-between">
              <div class="flex flex-col  mb-2 space-x-2 justify-center  ">
                <label class="block mb-2  text-secundary-50 font-bold ">
                  Mujeres
                </label>
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


            </section>
            <section class="my-8 flex justify-between">
              <div class="flex flex-col  mb-2 space-x-2 justify-center  ">
                <label class="block mb-2  text-secundary-50 font-bold ">
                  Total
                </label>
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


            </section>
          </section>
        </section>

      </section>
      <section>
        <h4 class=" mx-14 my-2 text-secundary-50  text-xl font-bold">
          III. EGRESADOS Y TITULADOS
        </h4>
        <section class="flex mx-14 my-1">
          <section class="my-8 w-fit">
            <label class="block mb-2 text-sm text-secundary-50 font-bold ">
              1. Número de egresados en el ciclo escolar <span class="text-secundary-100">
              {{ cicloEscolar }}
              </span> por sexo, con discapacidad y hablantes de lengua indígena.

            </label>

          </section>
          <section class="flex justify-between items-center w-full gap-3">
            <section class="my-8 flex justify-between">
              <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                <label class="block mb-2 text-xs  text-secundary-50 font-bold ">
                  Hombres
                </label>
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


            </section>
            <section class="my-8 flex justify-between">
              <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                <label class="block mb-2 text-xs text-secundary-50 font-bold ">
                  Mujeres
                </label>
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


            </section>
            <section class="my-8 flex justify-between">
              <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                <label class="block mb-2 text-xs text-secundary-50 font-bold ">
                  Total
                </label>
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


            </section>
            <section class="my-8 flex justify-between">
              <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                <label class="block mb-2 text-xs text-center w-full text-secundary-50 font-bold ">
                  Con discapacidad
                </label>
                <div class="flex">
                  <input
                      class="block w-9 h-9 py-3  text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
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


            </section>
            <section class="my-8 flex justify-between">
              <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                <label class="block mb-2 text-xs text-center text-secundary-50 font-bold ">
                  Hablantes de lenguas indígenas
                </label>
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
                      type="text"/>
                  <input
                      class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                      maxlength="1"
                      required
                      type="text"/>
                </div>
              </div>


            </section>
          </section>
        </section>
        <section class="flex mx-14 my-1">
          <section class="my-8 w-fit">
            <label class="block mb-2 text-sm text-secundary-50 font-bold ">
              2. Número de <span class="font-extrabold">titulados</span> en el ciclo escolar <span
                class="text-secundary-100">
              {{ cicloEscolar }}
              </span> por sexo, con discapacidad y hablantes de lengua indígena.
              independientemente del año de egreso. Desglóselos por sexo, con discapacidad y hablantes de lengua
              indígena.
              <br/>
              <br/>

              Nota: Si por alguna razón la carrera únicamente cuenta con egresados y/o titulados, contabilícela como una
              carrera en el cuestionario 911.9 (Escuela).

            </label>

          </section>
          <section class="flex justify-between items-center w-full gap-3">
            <section class="my-8 flex justify-between">
              <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                <label class="block mb-2 text-xs  text-secundary-50 font-bold ">
                  Hombres
                </label>
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


            </section>
            <section class="my-8 flex justify-between">
              <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                <label class="block mb-2 text-xs text-secundary-50 font-bold ">
                  Mujeres
                </label>
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


            </section>
            <section class="my-8 flex justify-between">
              <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                <label class="block mb-2 text-xs text-secundary-50 font-bold ">
                  Total
                </label>
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


            </section>
            <section class="my-8 flex justify-between">
              <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                <label class="block mb-2 text-xs text-center w-full text-secundary-50 font-bold ">
                  Con discapacidad
                </label>
                <div class="flex">
                  <input
                      class="block w-9 h-9 py-3  text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
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


            </section>
            <section class="my-8 flex justify-between">
              <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                <label class="block mb-2 text-xs text-center text-secundary-50 font-bold ">
                  Hablantes de lenguas indígenas
                </label>
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
                      type="text"/>
                  <input
                      class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                      maxlength="1"
                      required
                      type="text"/>
                </div>
              </div>


            </section>
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