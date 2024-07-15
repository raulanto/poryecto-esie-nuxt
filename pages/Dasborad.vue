<script lang="ts" setup>
import {onMounted} from 'vue'
import {useFlowbite} from '~/composables/useFlowbite';

onMounted(() => {
	useFlowbite(() => {
		initFlowbite();
	})
})

definePageMeta({
	layout: 'dasboradlyt'
});
</script>

<template>
	<NuxtLayout >
		<NuxtPage/>
	</NuxtLayout>
</template>


<style scoped>

</style>

