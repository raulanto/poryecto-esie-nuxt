<script lang="ts" setup>
import {defineProps, onMounted, ref} from 'vue';
import {useFlowbite} from "~/composables/useFlowbite";

const props = defineProps({
  tooltipContent: {
    type: String,
    required: true
  },
  placement: {
    type: String,
    default: 'top'
  },
  triggerType: {
    type: String,
    default: 'hover'
  }
});

const targetEl = ref<HTMLElement | null>(null);
const triggerEl = ref<HTMLElement | null>(null);

onMounted(() => {
  useFlowbite(() => {
    const options = {
      placement: props.placement,
      triggerType: props.triggerType,
      onHide: () => {
        console.log('tooltip is hidden');
      },
      onShow: () => {
        console.log('tooltip is shown');
      }
    };

    if (targetEl.value && triggerEl.value) {
      new Tooltip(targetEl.value, triggerEl.value, options);
    }
  })

});
</script>

<template>
  <div class="">
    <div ref="triggerEl">
      <slot/>
    </div>
    <div ref="targetEl" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-950 border transition-opacity duration-300 bg-white rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
         role="tooltip">
      {{ tooltipContent }}
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
</template>
