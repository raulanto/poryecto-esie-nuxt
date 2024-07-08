<script lang="ts" setup>


</script>

<template>
	<nav class="bg-white dark:bg-gray-800 antialiased border-b border-gray-200">
		<div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
			<div class="flex items-center justify-between">

				<div class="flex items-center space-x-8">
					<div class="shrink-0">
						<NuxtLink class="flex items-center space-x-3 rtl:space-x-reverse" to="/">
							<img alt="Flowbite Logo" class="h-8" src="~/assets/logo.png"/>
							<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
							>EsieGraph</span
							>
						</NuxtLink>
					</div>
					<div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
						<NuxtLink to="/Login">
							<button
								class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								type="button"
							>
								Iniciar
							</button>
						</NuxtLink>
					</div>
					<div
						id="navbar-sticky"
						class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">

						<ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<NuxtLink class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
								          href="#"
								          title=""
								          to="/contacto">
									Contacto
								</NuxtLink>
							</li>
							<li class="shrink-0">
								<NuxtLink class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
								          href="#"
								          title=""
								          to="/escuelas">
									Escuelas
								</NuxtLink>
							</li>
							<li class="shrink-0">
								<a class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
								   href="#"
								   title="">
									Gift Ideas
								</a>
							</li>
							<li class="shrink-0">
								<a class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
								   href="#"
								   title="">
									Today's Deals
								</a>
							</li>
							<li class="shrink-0">
								<a class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
								   href="#"
								   title="">
									Sell
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
