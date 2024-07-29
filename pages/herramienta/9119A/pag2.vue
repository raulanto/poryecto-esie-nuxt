<script lang="ts" setup>
import ImputCheckbox from "~/components/herramienta/imputCheckbox.vue";

const cicloEscolar = ref("2022-2024")
const pagina = ref("02")
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
        <h4 class=" mx-14 my-2 text-secundary-50  text-xl font-bold"> I. CARACTERÍSTICAS DE LA CARRERA</h4>
        <section class="grid gap-6 mb-6 md:grid-cols-2 mx-14 my-1">

          <section class="my-8">
            <label class="block mb-2 text-sm text-secundary-50 font-bold ">
              1. Nivel de estudios al que corresponde la carrera o plan de estudios.
              <br>
              * Técnico superior universitario o profesional asociado.

            </label>

          </section>
          <section class="my-8 flex justify-between">
            <imput-checkbox :name="'Técnico Superior *'"></imput-checkbox>
            <imput-checkbox :name="'Licenciatura Universitaria y Tecnológica'"></imput-checkbox>
            <imput-checkbox :name="'Licenciatura en Educación Normal'"></imput-checkbox>

          </section>
        </section>

      </section>

      <section>
        <section class="grid gap-6 mb-6 md:grid-cols-3 mx-14 my-1">

          <section class="my-8">
            <label class="block mb-2 text-sm text-secundary-50 font-bold ">
              2. Fecha de creación y de la última actualización del plan de estudios.
              <br>
              Nota: La creación es el momento en que se implementó un nuevo plan de estudios, mientras que la
              actualización refiere a una modificación de un plan ya existente.
            </label>

          </section>
          <section class="my-8 flex flex-col mx-2">
            <h4 class="bg-secundary-50 text-white font-bold text-xl text-center w-full h-fit">Creación</h4>
            <div class="flex justify-between">
              <div>
                <div class="flex flex-col mb-2 space-x-2 rtl:space-x-reversen items-center">
                  <label class=" mb-2 text-sm text-secundary-50 font-bold ">
                    Año
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

              </div>
              <div>
                <div class="flex flex-col mb-2 space-x-2 rtl:space-x-reversen items-center">
                  <label class=" mb-2 text-sm text-secundary-50 font-bold ">
                    Mes
                  </label>
                  <div class="flex">
                    <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
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
              <div>
                <div class="flex flex-col mb-2 space-x-2 rtl:space-x-reversen items-center">
                  <label class=" mb-2 text-sm text-secundary-50 font-bold ">
                    Dia
                  </label>
                  <div class="flex">
                    <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
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
            </div>

          </section>
          <section class="my-8 flex flex-col mx-2">
            <h4 class="bg-secundary-50 text-white font-bold text-xl text-center w-full h-fit">Actualización</h4>
            <div class="flex justify-between">
              <div>
                <div class="flex flex-col mb-2 space-x-2 rtl:space-x-reversen items-center">
                  <label class=" mb-2 text-sm text-secundary-50 font-bold ">
                    Año
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

              </div>
              <div>
                <div class="flex flex-col mb-2 space-x-2 rtl:space-x-reversen items-center">
                  <label class=" mb-2 text-sm text-secundary-50 font-bold ">
                    Mes
                  </label>
                  <div class="flex">
                    <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
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
              <div>
                <div class="flex flex-col mb-2 space-x-2 rtl:space-x-reversen items-center">
                  <label class=" mb-2 text-sm text-secundary-50 font-bold ">
                    Dia
                  </label>
                  <div class="flex">
                    <input
                        class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
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
            </div>

          </section>
        </section>

      </section>

      <section>
        <section class="grid gap-6 mb-6 md:grid-cols-2 mx-14 my-1">

          <section class="my-8">
            <label class="block mb-2 text-sm text-secundary-50 font-bold ">
              3. Escriba la duración del programa y seleccione el tipo de estructura del plan de estudios.

            </label>

          </section>
          <section class="my-8 flex ">
            <imput-checkbox name="Duracion"></imput-checkbox>


            <div class=" mx-4">
              <table class="w-full text-sm text-center text-secundary-50 ">
                <caption class="bg-secundary-50 text-white text-center rounded-t-md">
                  Estructura del Plan de Estudios
                </caption>
                <thead class=" text-secundary-50  ">
                <tr class="">
                  <th  class="px-6 py-3 border  border-secundary-50 ">
                    Semestres
                  </th>
                  <th  class="px-6 py-3  border border-secundary-50 ">
                    Cuatrimestres
                  </th>
                  <th  class="px-6 py-3 border  border-secundary-50 ">
                    Trimestres
                  </th>
                  <th  class="px-6 py-3 border  border-secundary-50 " >
                    Asignaturas
                  </th>
                  <th  class="px-6 py-3 border  border-secundary-50 ">
                    Módulos o créditos
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr class=" border- border-secundary-50 text-center">

                  <td class="px-6 py-4">
                    <input id="remember"
                           class="w-6 h-6 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                           required
                           type="checkbox"
                           value=""/>
                  </td>
                  <td class="px-6 py-4">
                    <input id="remember"
                           class="w-6 h-6 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                           required
                           type="checkbox"
                           value=""/>
                  </td>
                  <td class="px-6 py-4">
                    <input id="remember"
                           class="w-6 h-6 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                           required
                           type="checkbox"
                           value=""/>
                  </td>
                  <td class="px-6 py-4">
                    <input id="remember"
                           class="w-6 h-6 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                           required
                           type="checkbox"
                           value=""/>
                  </td>
                  <td class="px-6 py-4">
                    <input id="remember"
                           class="w-6 h-6 text-secundary-50 border border-secundary-50 rounded bg-gray-50 focus:ring-3 focus:ring-secundary-50 "
                           required
                           type="checkbox"
                           value=""/>
                  </td>
                </tr>

                </tbody>
              </table>
            </div>

          </section>
        </section>
      </section>

      <section>
        <section class="grid gap-6 mb-6 md:grid-cols-2 mx-14 my-1">

          <section class="my-8">
            <label class="block mb-2 text-sm text-secundary-50 font-bold ">
              4. Número de créditos por cubrir (sólo si aplica).
            </label>

          </section>
          <section class="my-8 flex justify-between">
            <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center">
              <label class="block mb-2 text-sm text-secundary-50 font-bold " >
                Total de creditos
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