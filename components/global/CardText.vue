<script lang="ts" setup>
defineProps({
  text: {
    type: String,

  },
  text2: {
    type: String,

  },
  text3: {
    type: String,

  },
  text4: {
    type: String,

  }
})
</script>

<template>
  <div
      class="relative flex  flex-col h-full   break-words bg-white  select-none border-gray-100 shadow-md shadow-black/5 rounded-lg dark:border-gray-600"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap justify-center items-center">
        <div class="relative  pr-4  flex-grow flex-1 justify-center">
          <!--     Descrip      -->
          <h5 class="text-blueGray-400 uppercase font-bold text-xs">{{ text }}</h5>
          <span class="text-4xl font-black md:text-2xl ">
                            <!--     Carrera      -->
             {{ text2 }}
          </span>
          <h5 class="text-blueGray-400 font-bold text-xs pt-2">
            <!--        Modalidad y periodo        -->
            {{ text3 }} {{ text4 }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
