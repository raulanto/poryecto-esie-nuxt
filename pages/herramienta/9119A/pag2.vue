<script lang="ts" setup>
import NavbarPage from "~/components/herramienta/NavbarPage.vue";
import FooterPage from "~/components/herramienta/footerPage.vue";
import ImputText from "~/components/herramienta/imputText.vue";

const cicloEscolar = ref("2022-2024")
const pagina = ref("02")
const totalpagina = 12
</script>

<template>
  <NuxtLayout name="pagheader">
    <template #nav>
      <navbar-page :ciclo-escolar="cicloEscolar"/>
    </template>
    <template #main>
      <article class="flex-grow ">

        <section>
          <h4 class=" mx-14 my-2 text-secundary-50  text-xl font-bold"> I. CARACTERÍSTICAS DE LA CARRERA</h4>
          <section class="flex mx-14 my-1">
            <section class="my-8">
              <label class="block mb-2 text-sm text-secundary-50 font-bold ">
                1. Nivel de estudios al que corresponde la carrera o plan de estudios.
                <br>
                * Técnico superior universitario o profesional asociado.
              </label>
            </section>
            <section class="my-8 flex justify-between items-center">
              <imput-text :name="'Técnico Superior *'"></imput-text>
              <imput-text :name="'Licenciatura Universitaria y Tecnológica'"></imput-text>
              <imput-text :name="'Licenciatura en Educación Normal'"></imput-text>
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
                    <div class="flex ">
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
          <section class="flex mx-14 my-1">

            <section class="my-8">
              <label class="block mb-2 text-sm text-secundary-50 font-bold ">
                3. Escriba la duración del programa y seleccione el tipo de estructura del plan de estudios.

              </label>

            </section>
            <section class="my-8 flex ">
              <imput-text :name="'Duracion'"/>

              <div class=" mx-4">
                <table class=" text-sm text-center text-secundary-50 ">
                  <caption class="bg-secundary-50 text-white text-center rounded-t-md">
                    Estructura del Plan de Estudios
                  </caption>
                  <thead class=" text-secundary-50  ">
                  <tr class="">
                    <th class="px-6 py-3 border  border-secundary-50 ">
                      Semestres
                    </th>
                    <th class="px-6 py-3  border border-secundary-50 ">
                      Cuatrimestres
                    </th>
                    <th class="px-6 py-3 border  border-secundary-50 ">
                      Trimestres
                    </th>
                    <th class="px-6 py-3 border  border-secundary-50 ">
                      Asignaturas
                    </th>
                    <th class="px-6 py-3 border  border-secundary-50 ">
                      Módulos o créditos
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class=" border- border-secundary-50 text-center">

                    <td class="px-6 py-4">
                      <imput-text></imput-text>
                    </td>
                    <td class="px-6 py-4">
                      <imput-text></imput-text>
                    </td>
                    <td class="px-6 py-4">
                      <imput-text></imput-text>
                    </td>
                    <td class="px-6 py-4">
                      <imput-text></imput-text>
                    </td>
                    <td class="px-6 py-4">
                      <imput-text></imput-text>
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
                <label class="block mb-2 text-sm text-secundary-50 font-bold ">
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
    </template>

    <template #footer>
      <footer-page :pagina="pagina" :totalpagina="totalpagina"/>
    </template>
  </NuxtLayout>


</template>

<style scoped>

</style>