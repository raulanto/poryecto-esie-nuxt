<script setup lang="ts">

import Line from "~/components/icons/Line.vue";
const emit = defineEmits(['toggleSidebar']);
</script>

<template>
	<nav
		class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50 w-screen backdrop-blur-sm bg-white/30"
	>
		<div class="flex flex-wrap justify-between items-center">
			<div class="flex justify-start items-center">
				<div class="text-center">
					<button
						id="toggle-sidebar-button"
						class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						@click="$emit('toggleSidebar')"
					>
						<Line></Line>
					</button>
				</div>
				<a class="flex items-center justify-between mr-4" href="">
					<img alt="Flowbite Logo" class="mr-3 h-8" src="~/assets/logo.png"/>
					<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
					>Dashboard</span
					>
				</a>
			</div>
			<div class="flex items-center lg:order-2">
				<button
					id="user-menu-button"
					aria-expanded="false"
					class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
					data-dropdown-toggle="dropdown"
					type="button"
				>
					<span class="sr-only">Open user menu</span>
					<img
						alt="user photo"
						class="w-8 h-8 rounded-full"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
					/>
				</button>
				<!-- Dropdown menu -->
				<div
					id="dropdown"
					class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
				>
					<div class="py-3 px-4">
						<span class="block text-sm font-semibold text-gray-900 dark:text-white">asdadas</span>
						<span class="block text-sm text-gray-900 truncate dark:text-white"></span>
					</div>

					<ul aria-labelledby="dropdown" class="py-1 text-gray-700 dark:text-gray-300">
						<li>
							<NuxtLinkk to="/">
								<div
									class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									href="#"
								>Sign out</div
								>
							</NuxtLinkk>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<style scoped>

</style>