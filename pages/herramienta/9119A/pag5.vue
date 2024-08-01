<script lang="ts" setup>
import FooterPage from "~/components/herramienta/footerPage.vue";
import NavbarPage from "~/components/herramienta/NavbarPage.vue";

const cicloEscolar = ref("2022-2024")
const pagina = ref("05")
const totalpagina = 12
</script>

<template>
  <NuxtLayout name="pagheader">
    <template #nav>
      <navbar-page :ciclo-escolar="cicloEscolar"/>
    </template>
    <template #main>
      <article class="flex-grow ">
        <h4 class=" mx-14 my-2 text-secundary-50 text-xl font-bold">IV. MOVILIDAD DE ALUMNOS</h4>
        <section class="flex justify-between items-center mx-14 my-1">
          <section class="my-1">
            <h3 class="block mb-2 text-left text-sm text-secundary-50 font-bold  max-w-sm">
              1. Total de alumnos en el ciclo
              <span class="text-secundary-100">
                {{ cicloEscolar }}
              </span> que la institución
              envió a otra entidad o país, bajo cualquier modalidad de
              intercambio o estancia.
            </h3>
          </section>
          <section class="flex  items-center">
            <article class="my-4 flex justify-between">
              <section class="flex flex-col  mb-2 space-x-2 justify-center  ">
                <label class="block mb-2  text-secundary-50 font-bold ">
                  Hombres
                </label>
                <div class="flex">
                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                      maxlength="1"
                      required
                      type="text"/>

                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50  "
                      maxlength="1"
                      required
                      type="text"/>
                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                      maxlength="1"
                      required
                      type="text"/>
                </div>
              </section>
            </article>
            <section class="my-4 flex justify-between">
              <div class="flex flex-col  mb-2 space-x-2 justify-center  ">
                <label class="block mb-2  text-secundary-50 font-bold ">
                  Mujeres
                </label>
                <div class="flex">
                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                      maxlength="1"
                      required
                      type="text"/>

                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50  "
                      maxlength="1"
                      required
                      type="text"/>
                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                      maxlength="1"
                      required
                      type="text"/>
                </div>
              </div>


            </section>
            <section class="my-4 flex justify-between">
              <div class="flex flex-col  mb-2 space-x-2 justify-center  ">
                <label class="block mb-2  text-secundary-50 font-bold ">
                  Total
                </label>
                <div class="flex">
                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                      maxlength="1"
                      required
                      type="text"/>

                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50  "
                      maxlength="1"
                      required
                      type="text"/>
                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                      maxlength="1"
                      required
                      type="text"/>
                </div>
              </div>


            </section>
            <section class="my-4 flex justify-between">
              <div class="flex flex-col justify-center items-center mb-2 space-x-2">
                <label class="block mb-2  text-center text-secundary-50 font-bold w-52">
                  Enviados a otra
                  entidad federativa
                </label>
                <div class="flex">
                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                      maxlength="1"
                      required
                      type="text"/>
                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50  "
                      maxlength="1"
                      required
                      type="text"/>

                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                      maxlength="1"
                      required
                      type="text"/>
                </div>
              </div>
            </section>
            <section class="my-4 flex justify-between">
              <div class="flex flex-col  mb-2 space-x-2 justify-center  ">
                <label class="block mb-2  text-secundary-50 font-bold ">
                  Enviados a
                  otro país
                </label>
                <div class="flex">
                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                      maxlength="1"
                      required
                      type="text"/>
                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50  "
                      maxlength="1"
                      required
                      type="text"/>
                  <input
                      class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                      maxlength="1"
                      required
                      type="text"/>
                </div>
              </div>
            </section>
          </section>
        </section>
        <section class="mx-14 my-1">
          <section class="my-1">
            <h3 class="block mb-2 text-left text-sm text-secundary-50 font-bold ">
              2. Indique la o las entidades a las que se enviaron alumnos en el ciclo
              <span class="text-secundary-100">
                {{ cicloEscolar }}
              </span>, bajo cualquier modalidad. Desglose por sexo, tipo de movilidad y cuántos de
              ellos recibieron algún tipo de financiamiento por parte de la institución que envía.
              <br/><br/>
              Nota: Si la institución envió alumnos a más de 5 entidades, repórtelos en copias fotostáticas de esta
              página y anexe a este cuestionario las páginas adicionales.
            </h3>
          </section>
          <section class="flex ">
            <article class="flex flex-col items-center w-96">
              <div>
                <h2 class="block mb-2 text-left text-sm text-secundary-50 font-bold">
                  Entidad destino
                </h2>
              </div>
              <div>
                <input id="small-input" class=" w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                       type="text">
                <input id="small-input" class=" w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                       type="text">
                <input id="small-input" class=" w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                       type="text">
                <input id="small-input" class=" w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                       type="text">
                <input id="small-input" class=" w-full p-1.5 text-gray-900 border-white  border-b-secundary-50 "
                       type="text">
              </div>
            </article>
            <article>
              <table>
                <thead>
                <tr>
                  <th>
                    Hombres
                  </th>
                  <th>
                    Mujeres
                  </th>
                  <th>
                    Total
                  </th>
                  <th>
                    Enviados a otra entidad federativa
                  </th>
                  <th>
                    Enviados a otro país
                  </th>
                </tr>
                </thead>
                <tbody></tbody>
              </table>
            </article>
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