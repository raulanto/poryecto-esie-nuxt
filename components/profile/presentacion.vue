<script lang="ts" setup>

defineProps({
  user: {
    type: Array,
    reqUired: true
  }
})

</script>

<template>
  <div class="bg-white rounded-lg shadow-xl pb-8">
    <div class="w-full h-[250px]">
      <img class="w-full h-full rounded-tl-lg rounded-tr-lg"
           src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"/>
    </div>
    <div class="flex flex-col items-center -mt-20">
      <img class="w-40 border-4 border-white rounded-full"
           src="../../assets/PERFIL.png"/>
      <div class="flex items-center space-x-2 mt-2">
        <p class="text-2xl">{{ user.user.nombre }}</p>
        <span class="bg-blue-500 rounded-full p-1" title="Verified">
                        <svg class="text-gray-100 h-2.5 w-2.5" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="4"></path>
                        </svg>
                    </span>
      </div>
      <p class="text-gray-700">{{ user.user.cargo }}</p>
      <p class="text-sm text-gray-500">{{ user.user.escuela }}</p>
    </div>
    <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
    </div>
  </div>
</template>

<style scoped>

</style>