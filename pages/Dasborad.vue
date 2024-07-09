<script lang="ts" setup>
import {onMounted} from 'vue'
import {useFlowbite} from '~/composables/useFlowbite';

onMounted(() => {
	useFlowbite(() => {
		initFlowbite();
	})
})

definePageMeta({
	layout: 'dasboradlyt',
	name:'Dasborad'
})
</script>

<template>
	<NuxtLayout name="dasboradlyt">
		<NuxtPage/>
	</NuxtLayout>
</template>


<style scoped>

</style>

