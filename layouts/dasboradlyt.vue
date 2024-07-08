<script setup lang="ts">
const dropdownItems1 = [
    {label: 'Poblacion por rango', href: '/proyect/'},

]
</script>

<template>
	<section class="antialiased fondo h-full bg-gray-50 dark:bg-gray-800 bg-cover bg-bottom">
		<Sidebar :nav="dropdownItems1"/>
		<slot/>
	</section>
</template>

<style scoped>

</style>