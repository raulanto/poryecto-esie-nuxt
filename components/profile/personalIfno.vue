<script setup lang="ts">
defineProps({
  user: {
    type: Array,
    reqUired: true
  }
})
</script>

<template>
  <div class="w-full flex flex-col 2xl:w-1/3">
    <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
      <h4 class="text-xl text-gray-900 font-bold">Informacion Personal</h4>
      <ul class="mt-2 text-gray-700">
        <li class="flex border-y py-2">
          <span class="font-bold w-24">Nombre completo:</span>
          <span class="text-gray-700">{{user.user.nombre}}</span>
        </li>
        <li class="flex border-b py-2">
          <span class="font-bold w-24">Correo:</span>
          <span class="text-gray-700">{{user.user.correo}}</span>
        </li>
        <li class="flex border-b py-2">
          <span class="font-bold w-24">Escuela:</span>
          <span class="text-gray-700">{{user.user.escuela}}</span>
        </li>
        <li class="flex border-b py-2">
          <span class="font-bold w-24">Cargo:</span>
          <span class="text-gray-700">{{user.user.cargo}}</span>
        </li>
        <li class="flex items-center border-b py-2 space-x-2">
          <span class="font-bold w-24">Sistema:</span>
          <a href="#" title="Esie">
            <img src="../../assets/logo.png" width="35px">
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped>

</style>