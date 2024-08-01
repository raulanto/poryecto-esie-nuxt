<script lang="ts" setup>
import FooterPage from "~/components/herramienta/footerPage.vue";
import NavbarPage from "~/components/herramienta/NavbarPage.vue";

const cicloEscolar = ref("2022-2024")
const pagina = ref("04")
const totalpagina = 12
</script>

<template>
   <NuxtLayout name="pagheader">
      <template #nav>
         <navbar-page :ciclo-escolar="cicloEscolar"/>
      </template>
      <template #main>
         <article class="flex-grow ">
            <section class="grid gap-6 mb-6 md:grid-cols-2 mx-14 my-1">
               <section class="my-8">
                  <label class="block mb-2 text-sm text-secundary-50 font-bold ">
                     3. Número de egresados y titulados en el ciclo escolar
                    <span class="text-secundary-100">
                    {{ cicloEscolar }}
                    </span>, por sexo y edad.
                  </label>
               </section>
            </section>
            <section class="flex  justify-around mx-14 my-1">
               <section class="grid gap-6 mb-6 grid-cols-3 mx-14 my-1">
                  <section class="my-8 w-fit">
                     <div class="flex flex-col ">
                        <section class="my-8">
                           <div class="flex flex-col mt-12 items-center ">
                              <div class="grid w-64 md:grid-cols-1 text-secundary-50">
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
                                 <label class="mt-4 font">
                                    30 años o más </label>
                              </div>
                              <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center text-secundary-50">
                                 <label class="mt-4 font-bold">
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
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/>
                                 </div>
                                 <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center mt-4">

                                    <div class="flex">
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                           maxlength="1"
                                           required
                                           type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                           maxlength="1"
                                           required
                                           type="text"/> <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                           maxlength="1"
                                           required
                                           type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
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
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/>
                                 </div>
                                 <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center mt-4">

                                    <div class="flex">
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                           maxlength="1"
                                           required
                                           type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                           maxlength="1"
                                           required
                                           type="text"/> <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                           maxlength="1"
                                           required
                                           type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
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
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/>
                                 </div>
                                 <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center mt-4">

                                    <div class="flex">
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                           maxlength="1"
                                           required
                                           type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                           maxlength="1"
                                           required
                                           type="text"/> <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                           maxlength="1"
                                           required
                                           type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
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
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/>
                                 </div>
                                 <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center mt-4">

                                    <div class="flex">
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                           maxlength="1"
                                           required
                                           type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                           maxlength="1"
                                           required
                                           type="text"/> <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                           maxlength="1"
                                           required
                                           type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
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
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/>
                                 </div>
                                 <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center mt-4">

                                    <div class="flex">
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                           maxlength="1"
                                           required
                                           type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                           maxlength="1"
                                           required
                                           type="text"/> <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                           maxlength="1"
                                           required
                                           type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
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
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/> <input
                                     class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                     maxlength="1"
                                     required
                                     type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                    <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
                                        maxlength="1"
                                        required
                                        type="text"/>
                                 </div>
                                 <div class="flex mb-2 space-x-2 rtl:space-x-reversen items-center mt-4">

                                    <div class="flex">
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50 roun rounded-l-lg"
                                           maxlength="1"
                                           required
                                           type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                           maxlength="1"
                                           required
                                           type="text"/> <input
                                        class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                        maxlength="1"
                                        required
                                        type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  "
                                           maxlength="1"
                                           required
                                           type="text"/>
                                       <input
                                           class="block w-8 h-8 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-secundary-50  rounded-r-lg"
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

      </template>
      <template #footer>
         <footer-page :pagina="pagina" :totalpagina="totalpagina"/>
      </template>
   </NuxtLayout>
</template>

<style scoped>

</style>