<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface DropdownItem {
  label: string
  href: string
}

const props = defineProps<{
  items: DropdownItem[]
  buttonLabel: string
  icon: any
  dropdownId: string
}>()

const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const handleClickOutside = (event: MouseEvent) => {
  const dropdown = document.getElementById(`dropdown-${props.dropdownId}`)
  const button = document.getElementById(`button-${props.dropdownId}`)

  if (
    dropdown &&
    !dropdown.contains(event.target as Node) &&
    button &&
    !button.contains(event.target as Node)
  ) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div>
    <button
      :id="`button-${props.dropdownId}`"
      type="button"
      @click="toggleDropdown"
      class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      :aria-controls="`dropdown-${props.dropdownId}`"
      :aria-expanded="isDropdownOpen"
    >
      <component :is="icon" />
      <span class="flex-1 ml-3 text-left whitespace-nowrap">{{ buttonLabel }}</span>
      <svg
        aria-hidden="true"
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <transition name="fade">
      <ul v-if="isDropdownOpen" :id="`dropdown-${props.dropdownId}`" class="py-2 space-y-2">
        <li v-for="item in items" :key="item.label">
          <NuxtLink :to="item.href">
            <div
              class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              {{ item.label }}
            </div>
          </NuxtLink>
        </li>
        <slot />
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
