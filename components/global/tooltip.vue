<script setup lang="ts">
import { onMounted, defineProps, ref } from 'vue';
import { Tooltip } from 'flowbite';

const props = defineProps({
  $tooltipContent: {
    type: String,
    required: true
  },
  $tooltipButton: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const targetEl = ref<HTMLElement | null>(null);
const triggerEl = ref<HTMLElement | null>(null);


onMounted(() => {
  // options with default values
  const options = {
    placement: 'top',
    triggerType: 'hover',
    onHide: () => {
      console.log('tooltip is hidden');
    },
    onShow: () => {
      console.log('tooltip is shown');
    }
  };

  // asegúrate de que targetEl y triggerEl no sean nulos
  if (targetEl.value && triggerEl.value) {
    const tooltip = new Tooltip(targetEl.value, triggerEl.value, options);
  }
});
</script>

<template>
  <div class="flex justify-center max-w-2xl p-4 mx-auto pt-26">
    <slot :id="triggerEl" />
    <div :id="targetEl" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
      {{ props.title }}
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
</template>
