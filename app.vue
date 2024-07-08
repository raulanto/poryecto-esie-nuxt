<template>
	<div>
		<NuxtLayout name="home">
			<NuxtPage/>
		</NuxtLayout>
	</div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';

// initialize components based on data attribute selectors
onMounted(() => {
	useFlowbite(() => {
		initFlowbite();
	})
})

useHead({
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ key: 'theme-color', name: 'theme-color' }
	],
	link: [
		{ rel: 'icon', href: '/favicon.ico' }
	],
	htmlAttrs: {
		lang: 'en'
	}
})

const title = 'EsieGraph'
const description = 'sistema de estadisticas Escolar'

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	// ogImage: 'https://dashboard-template.nuxt.dev/social-card.png',
	// twitterImage: 'https://dashboard-template.nuxt.dev/social-card.png',
	// twitterCard: 'summary_large_image'
})


</script>