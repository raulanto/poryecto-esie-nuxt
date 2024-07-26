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
      class="relative flex  flex-col min-w-0  break-words bg-white h-32 mb-6 xl:mb-0 select-none border-gray-100 shadow-md shadow-black/5 rounded-lg dark:border-gray-600"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
          <h5 class="text-blueGray-400 uppercase font-bold text-xs">{{ text }}</h5>
          <span class="text-4xl font-extrabold md:text-2xl">{{
              text2
            }}
                    </span>
          <h5 class="text-blueGray-400 font-bold text-xs pt-2">{{ text3 }} {{ text4 }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
