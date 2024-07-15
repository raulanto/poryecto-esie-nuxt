<script setup lang="ts">
const dropdownItems1 = [
    {label: 'Poblacion por rango', href: '/proyect/'},
	{label: 'Poblacion por rango', href: '/proyect/'},
]
</script>

<template>
	<section class=" antialiased fondo h-full bg-gray-50 dark:bg-gray-800 bg-cover bg-bottom">
		<Sidebar />
		<section class="p-4 md:scroll-ml-60 h-full pt-20 dark:border-gray-600 dark:bg-gray-900 md:container md:mx-auto ">
			<slot/>
		</section>

	</section>
</template>

<style scoped>

</style>