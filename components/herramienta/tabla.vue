<script lang="ts" setup>

</script>

<template>
  <section class="my-9">
    <div class="">
      <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input id="checkbox-all" type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="checkbox-all" class="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" class="px-4 py-3">Reporte</th>
              <th scope="col" class="px-4 py-3">Carrera</th>
              <th scope="col" class="px-4 py-3">Fecha De creacion</th>
              <th scope="col" class="px-4 py-3">Opciones</th>

            </tr>
            </thead>
            <tbody>
            <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="w-4 px-4 py-3">
                <div class="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" class="w-auto h-8 mr-3">
                Apple iMac 27&#34;
              </th>
              <td class="px-4 py-2">
                <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">Desktop PC</span>
              </td>
              <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div class="flex items-center">
                  <div class="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                  95
                </div>
              </td>
              <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">1.47</td>

            </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>