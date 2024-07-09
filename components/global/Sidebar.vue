<script lang="ts" setup>
import {defineProps, onMounted, onUnmounted, ref} from 'vue'
import {useFlowbite} from '~/composables/useFlowbite';

import Graph from '@/components/icons/Graph.vue'
import Line from '@/components/icons/Line.vue'
import ReusableDropdown from '@/components/global/DropDown.vue'

const isSidebarVisible = ref(false)

const props = defineProps({
  nav: {
    type: Array,
    required: true
  },
});



const toggleSidebar = () => {
	isSidebarVisible.value = !isSidebarVisible.value
	console.log("asdsdsdasdsad")
}

const handleClickOutside = (event) => {
	const button = document.getElementById('toggle-sidebar-button')
	const sidebar = document.getElementById('default-sidebar')

	if (isSidebarVisible.value) {
		if (sidebar && !sidebar.contains(event.target) && button && !button.contains(event.target)) {
			isSidebarVisible.value = false
		}
	}
}

const handleResize = () => {
	if (window.innerWidth > 640 && isSidebarVisible.value) {
		isSidebarVisible.value = false
	}
}

onMounted(() => {
	document.addEventListener('click', handleClickOutside)
	window.addEventListener('resize', handleResize)
	useFlowbite(() => {
		initFlowbite();
	})
})

onUnmounted(() => {
	document.removeEventListener('click', handleClickOutside)
	window.removeEventListener('resize', handleResize)
  useFlowbite(() => {
    initFlowbite();
  })
})
</script>

<template>

	<NavarDas  @toggleSidebar="toggleSidebar"/>
	<transition name="slide-fade">
		<div
			v-if="isSidebarVisible"
			id="default-sidebar"
			aria-labelledby="default-sidebar"
			class="fixed top-0 left-0 z-40 w-64 h-screen p-2 pt-14 transition-transform bg-white dark:bg-gray-800"
			tabindex="-1"
		>
			<div class="overflow-y-auto py-5 px-2 h-full bg-white dark:bg-gray-800">
				<div>
					<ReusableDropdown
						:icon="Graph"
						:items="props.nav"
						buttonLabel="Poblacion"
						dropdownId="1"
					/>
				</div>
			</div>
		</div>
	</transition>

</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: transform 0.3s ease,
	opacity 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(-100%);
	opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
	transform: translateX(0);
	opacity: 1;
}
</style>
