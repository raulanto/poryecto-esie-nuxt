<script lang="ts" setup>
import {onMounted} from 'vue'
import {useFlowbite} from '~/composables/useFlowbite';
onMounted(() => {
	useFlowbite(() => {
		initFlowbite();
	})
})
</script>

<template>
		<NuxtLayout name="dasboradlyt">
			<NuxtLayout name="main">
				<NuxtPage/>
			</NuxtLayout>
		</NuxtLayout>
</template>

<style scoped>

</style>