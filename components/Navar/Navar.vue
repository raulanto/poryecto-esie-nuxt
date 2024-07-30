<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// Definir el estado activo
const route = useRoute();
const activeLink = computed(() => route.path);
</script>



<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 border-2">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a class="flex items-center" href="">
          <img alt="Esie Logo" class="mr-3 h-6 sm:h-9" src="../../assets/logo.png"/>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">EsieGraph</span>
        </a>
        <div class="flex items-center lg:order-2">
          <NuxtLink to="/login" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" href="#">Inicio</NuxtLink>
          <button aria-controls="mobile-menu-2" aria-expanded="false" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" data-collapse-toggle="mobile-menu-2" type="button">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" fill-rule="evenodd"></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div id="mobile-menu-2" class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul id="nav" class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NuxtLink
                  :class="['nav-link block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0 dark:text-white', activeLink === '/' ? 'bg-primary-700 text-primary-700' : 'text-gray-700']"
                  to="/"
              >
                Inicio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  :class="['nav-link block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0 dark:text-white', activeLink === '/contacto' ? 'bg-primary-700 text-primary-700' : 'text-gray-700']"
                  to="/contacto"
              >
                Contacto
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  :class="['nav-link block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0 dark:text-white', activeLink === '/escuelas' ? 'bg-primary-700 text-primary-700' : 'text-gray-700']"
                  to="/escuelas"
              >
                Escuela
              </NuxtLink>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>



<style scoped>

</style>