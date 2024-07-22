<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  carrera: {
    type: String,
    required: true
  },
  periodo: {
    type: String,
    required: true
  },
  modalidad: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
      class="relative flex flex-col min-w-0  break-words bg-white h-32 mb-6 xl:mb-0   select-none border-gray-100 shadow-md shadow-black/5 rounded-lg dark:border-gray-600"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
          <h5 class="text-blueGray-400 uppercase font-bold text-xs">{{ name }}</h5>
          <span class="text-4xl font-extrabold md:text-2xl">{{
              carrera
            }}
                    </span>
          <h5 class="text-blueGray-400 font-bold text-xs pt-2">{{ periodo }}- Modalidad {{modalidad }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
