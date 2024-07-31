<script lang="ts" setup>
import ImputCheckbox from "~/components/herramienta/imputCheckbox.vue";
import FooterPage from "~/components/herramienta/footerPage.vue";
import NavbarPage from "~/components/herramienta/NavbarPage.vue";
import ImputText from "~/components/herramienta/imputText.vue";

const cicloEscolar = ref("2022-2024")
const pagina = ref("03")
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
               <h4 class=" mx-14 my-2 text-secundary-50  text-xl font-bold">
                  II. ALUMNOS DE PRIMER INGRESO DEL CICLO ANTERIOR
               </h4>
               <section class="grid gap-6 mb-6 md:grid-cols-2 mx-14 my-1">
                  <section class="my-8">
                     <label class="block mb-2 text-sm text-secundary-50 font-bold ">
                        1. Número de periodos de inscripción a primer ingreso que ofreció la facultad o escuela durante
                        el ciclo
                        escolar
                        <span class="text-secundary-100">
              {{ cicloEscolar }}
              </span>
                     </label>

                  </section>
                  <section class="my-8 flex justify-between">
                     <imput-text :name="'Periodos'"/>


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
                                  class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                  maxlength="1"
                                  required
                                  type="text"/>
                              <input
                                  class="block w-11 h-11  font-extrabold  text-xl  text-center text-gray-900 bg-white border border-secundary-50  "
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
                        </div>


                     </section>
                     <section class="my-8 flex justify-between">
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
                     <section class="my-8 flex justify-between">
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

            </section>
            <section>
               <h4 class=" mx-14 my-2 text-secundary-50  text-xl font-bold">
                  III. EGRESADOS Y TITULADOS
               </h4>
               <section class="flex justify-around mx-14 my-1">
                  <section class="my-8 w-fit">
                     <label class="block mb-2 text-sm text-secundary-50 font-bold ">
                        1. Número de egresados en el ciclo escolar
                        <span class="text-secundary-100">
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
                           <div class="flex flex-nowrap ">
                              <input
                                  class="block w-11 h-11  font-extrabold  text-xl  text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                  maxlength="1"
                                  required
                                  type="text"/>
                              <input
                                  class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50  "
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
                     <section class="my-8 flex justify-between">
                        <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                           <label class="block mb-2 text-xs text-secundary-50 font-bold ">
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
                     <section class="my-8 flex justify-between">
                        <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                           <label class="block mb-2 text-xs text-secundary-50 font-bold ">
                              Total
                           </label>
                           <div class="flex">
                              <input
                                  class="block w-11 h-11  font-extrabold  text-xl  text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                  maxlength="1"
                                  required
                                  type="text"/>
                              <input
                                  class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50  "
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
                        </div>


                     </section>
                     <section class="my-8 flex justify-between">
                        <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                           <label class="block mb-2 text-xs text-center w-full text-secundary-50 font-bold ">
                              Con discapacidad
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
                        </div>


                     </section>
                     <section class="my-8 flex justify-between">
                        <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                           <label class="block mb-2 text-xs text-center text-secundary-50 font-bold ">
                              Hablantes de lenguas indígenas
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
                        independientemente del año de egreso. Desglóselos por sexo, con discapacidad y hablantes de
                        lengua
                        indígena.
                        <br/>
                        <br/>

                        Nota: Si por alguna razón la carrera únicamente cuenta con egresados y/o titulados,
                        contabilícela como
                        una
                        carrera en el cuestionario 911.9 (Escuela).
                     </label>
                  </section>
                  <section class="flex justify-between items-center w-full gap-3">
                     <section class="my-8 flex justify-between">
                        <div class="flex flex-col items-center mb-2 space-x-2 justify-center ">
                           <label class="block mb-2 text-xs  text-secundary-50 font-bold ">
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
                     <section class="my-8 flex justify-between">
                        <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                           <label class="block mb-2 text-xs text-secundary-50 font-bold ">
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
                     <section class="my-8 flex justify-between">
                        <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                           <label class="block mb-2 text-xs text-secundary-50 font-bold ">
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
                     <section class="my-8 flex justify-between">
                        <div class="flex flex-col items-center mb-2 space-x-2 justify-center  ">
                           <label class="block mb-2 text-xs text-center w-full text-secundary-50 font-bold ">
                              Con discapacidad
                           </label>
                           <div class="flex">
                              <input
                                  class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                  maxlength="1"
                                  required
                                  type="text"/>

                              <input
                                  class="block w-11 h-11  font-extrabold  text-xl  text-center text-gray-900 bg-white border border-secundary-50  "
                                  maxlength="1"
                                  required
                                  type="text"/>
                              <input
                                  class="block w-11 h-11  font-extrabold  text-xl  text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
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
                                  class="block w-11 h-11  font-extrabold  text-xl  text-center  text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                  maxlength="1"
                                  required
                                  type="text"/>

                              <input
                                  class="block w-11 h-11  font-extrabold  text-xl  text-center text-gray-900 bg-white border border-secundary-50  "
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