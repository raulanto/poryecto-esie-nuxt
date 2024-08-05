<script lang="ts" setup>
import {computed} from 'vue'


const props = defineProps({
    series: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

const total = computed(() => {
    return props.series.length ? props.series.reduce((acc, curr) => acc + curr, 0) : 0
})

let color = props.color
</script>

<template>

    <div class="card flex flex-col justify-center px-2 py-4 text-center break-words bg-white  h-full select-none border-gray-100 shadow-md shadow-black/5 rounded-lg dark:border-gray-600">
      <dt class="order-last text-lg font-medium text-gray-500">
              {{ props.name }}
      </dt>
        <dd :style="{ color: color }" class="text-4xl font-extrabold md:text-5xl">
          {{ total }}
        </dd>
    </div>

</template>


<style scoped>



</style>