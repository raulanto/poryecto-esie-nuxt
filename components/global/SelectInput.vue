<template>
  <section class="w-full">
    <label
        :for="props.inputId"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >{{ props.label }}</label>
    <select
        :id="props.inputId"
        v-model="localValue"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    >
      <option :key="'default'" disabled value="default" selected>{{ defaultOption }}</option>
      <option v-for="option in props.options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </section>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'

const props = defineProps({
  label: String,
  options: Array,
  inputId: String,
  modelValue: String,
  defaultOption: {
    type: String,
    default: 'Seleccione una opción'
  }
})

const emit = defineEmits(['update:modelValue'])

const localValue = ref(props.modelValue || 'default')

watch(localValue, (newValue) => {
  emit('update:modelValue', newValue)
})

watch(
    () => props.modelValue,
    (newValue) => {
      localValue.value = newValue
    }
)
</script>
