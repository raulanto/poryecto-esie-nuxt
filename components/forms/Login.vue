<script lang="ts" setup>
// import {useLoginStore} from '@/stores/LoginStore';
// import type DatosLecturaForm from '@/types/formUsuarioLogin';
import {ref} from 'vue'

let username = ref('')
let password = ref('')
let error = ref(false)
let activado = ref(true)
let errorMessage = ref('')

// const loguearse = async () => {
//     const login = useLoginStore();
//     const data: DatosLecturaForm = {
//         'username': username.value,
//         'password': password.value
//     };
//     console.log(data);
//
//     await login.postLoginStore(data);
//     const validacion = login.validacion;
//
//     if (validacion) {
//         console.log('Correcto');
//         error.value = false;
//         activado.value = true;
//     } else {
//         console.log('Incorrecto');
//         error.value = true;
//         activado.value = false;
//         errorMessage.value = 'Usuario o contraseña incorrectos';
//     }
// };
</script>

<template>
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<router-link to="/">
			<a
				class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white bg-white rounded-full p-4"
				href="#"
			>
				<img alt="logo" class="w-12 h-12 mr-2" src="~/assets/logo.png"/>
				Esie <strong class="text-primary-600">Graph</strong>
			</a>
		</router-link>

		<div
			class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
		>
			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
				>
					Bienvenido
				</h1>
				<!--                    <form class="space-y-4 md:space-y-6" @submit.prevent="loguearse()">-->
				<form class="space-y-4 md:space-y-6">
					<!-- Usuario -->
					<div>
						<label
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							for="username"
						>Usuario</label
						>
						<input
							id="username"
							v-model="username"
							:class="{
                  'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500':
                    activado,
                  'bg-red-50 border border-red-300 text-red-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500':
                    error
                }"
							name="username"
							placeholder="usuario"
							type="text"
						/>
					</div>
					<!-- Contraseña -->
					<div>
						<label
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							for="password"
						>Contraseña</label
						>
						<input
							id="password"
							v-model="password"
							:class="{
                  'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500':
                    activado,
                  'bg-red-50 border border-red-300 text-red-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500':
                    error
                }"
							name="password"
							placeholder="********"
							type="password"
						/>
					</div>
					<NuxtLink to="/Dasborad">
						<button

							class="w-full mt-3 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							type="submit"
						>
							Entrar
						</button>
					</NuxtLink>
					<p v-if="error" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>
				</form>
			</div>
		</div>
	</div>
</template>
