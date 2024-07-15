<template>
  <button
      :class="[`btn-${props.type}`, { 'btn-disabled': props.disabled }]"
      :disabled="props.disabled"
      @click="handleClick"
      aria-label="button"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'red', 'green', 'cyan', 'teal', 'lime', 'pink', 'purple'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<style scoped>
.btn-disabled {
  @apply bg-gray-400 text-gray-700 cursor-not-allowed;
}
</style>
