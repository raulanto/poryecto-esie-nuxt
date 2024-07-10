<script lang="ts" setup>
// import {useLoginStore} from '@/stores/LoginStore';
// import type DatosLecturaForm from '@/types/formUsuarioLogin';
import Login from "~/components/forms/Login.vue";

definePageMeta({
	layout: 'customlogin'
});


</script>

<template>
	<NuxtLayout>
		<section
			class="bg-center bg-cover fondo"
		>
			<Login/>
		</section>
	</NuxtLayout>

</template>

<style scoped>

.fondo{
	background-image: url("assets/img/fondo.png");
}

</style>