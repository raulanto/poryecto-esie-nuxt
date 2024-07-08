<script setup lang="ts">

</script>

<template>
	<section class="bg-white dark:bg-gray-900">
		<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
			<div class="mx-auto max-w-screen-md sm:text-center">
				<h2
					class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white"
				>
					Sign up for our newsletter
				</h2>
				<p
					class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400"
				>
					Stay up to date with the roadmap progress, announcements and exclusive discounts feel free
					to sign up with your email.
				</p>
				<form action="#">
					<div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
						<div class="relative w-full">
							<label
								class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								for="email"
							>Email address</label
							>
							<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<svg
									class="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
									></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
							</div>
							<input
								id="email"
								class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Enter your email"
								type="email"
							/>
						</div>
						<div>
							<button
								class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								type="submit"
							>
								Subscribe
							</button>
						</div>
					</div>
					<div
						class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300"
					>
						We care about the protection of your data.
						<a class="font-medium text-primary-600 dark:text-primary-500 hover:underline" href="#"
						>Read our Privacy Policy</a
						>.
					</div>
				</form>
			</div>
		</div>
	</section>
	<section class="bg-white dark:bg-gray-900">
		<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
			<div class="mr-auto place-self-center lg:col-span-7">
				<h1
					class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
				>
					Payments tool for software companies
				</h1>
				<p
					class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
				>
					From checkout to global sales tax compliance, companies around the world use Flowbite to
					simplify their payment stack.
				</p>
				<a
					class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
					href="#"
				>
					Get started
					<svg
						class="w-5 h-5 ml-2 -mr-1"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							clip-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							fill-rule="evenodd"
						></path>
					</svg>
				</a>
				<a
					class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
					href="#"
				>
					Speak to Sales
				</a>
			</div>
			<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
				<img
					alt="mockup"
					src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
				/>
			</div>
		</div>
	</section>
	<section class="bg-white dark:bg-gray-900">
		<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
			<div class="mx-auto max-w-screen-sm">
				<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
					Testimonials
				</h2>
				<p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
					Explore the whole collection of open-source web components and elements built with the
					utility classes from Tailwind
				</p>
			</div>
			<div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
				<figure
					class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
				>
					<blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
							Speechless with how easy this was to integrate
						</h3>
						<p class="my-4">
							"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy
							this was to integrate within my application. Most templates are a pain, code is
							scattered, and near impossible to theme.
						</p>
						<p class="my-4">
							Flowbite has code in one place and I'm not joking when I say it took me a matter of
							minutes to copy the code, customise it and integrate within a Laravel + Vue
							application.
						</p>
						<p class="my-4">If you care for your time, I hands down would go with this."</p>
					</blockquote>
					<figcaption class="flex justify-center items-center space-x-3">
						<img
							alt="profile picture"
							class="w-9 h-9 rounded-full"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
						/>
						<div class="space-y-0.5 font-medium dark:text-white text-left">
							<div>Bonnie Green</div>
							<div class="text-sm font-light text-gray-500 dark:text-gray-400">
								Developer at Open AI
							</div>
						</div>
					</figcaption>
				</figure>
				<figure
					class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700"
				>
					<blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
							Solid foundation for any project
						</h3>
						<p class="my-4">
							"FlowBite provides a robust set of design tokens and components based on the popular
							Tailwind CSS framework. From the most used UI components like forms and navigation
							bars to the whole app screens designed both for desktop and mobile, this UI kit
							provides a solid foundation for any project.
						</p>
						<p class="my-4">
							Designing with Figma components that can be easily translated to the utility classes
							of Tailwind CSS is a huge timesaver!"
						</p>
					</blockquote>
					<figcaption class="flex justify-center items-center space-x-3">
						<img
							alt="profile picture"
							class="w-9 h-9 rounded-full"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
						/>
						<div class="space-y-0.5 font-medium dark:text-white text-left">
							<div>Roberta Casas</div>
							<div class="text-sm font-light text-gray-500 dark:text-gray-400">
								Lead designer at Dropbox
							</div>
						</div>
					</figcaption>
				</figure>
				<figure
					class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
				>
					<blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
							Mindblowing workflow and variants
						</h3>
						<p class="my-4">
							"As someone who mainly designs in the browser, I've been a casual user of Figma, but
							as soon as I saw and started playing with FlowBite my mind was 🤯.
						</p>
						<p class="my-4">
							Everything is so well structured and simple to use (I've learnt so much about Figma by
							just using the toolkit).
						</p>
						<p class="my-4">
							Aesthetically, the well designed components are beautiful and will undoubtedly level
							up your next application."
						</p>
					</blockquote>
					<figcaption class="flex justify-center items-center space-x-3">
						<img
							alt="profile picture"
							class="w-9 h-9 rounded-full"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
						/>
						<div class="space-y-0.5 font-medium dark:text-white text-left">
							<div>Jese Leos</div>
							<div class="text-sm font-light text-gray-500 dark:text-gray-400">
								Software Engineer at Facebook
							</div>
						</div>
					</figcaption>
				</figure>
				<figure
					class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700"
				>
					<blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
							Efficient Collaborating
						</h3>
						<p class="my-4">
							"This is a very complex and beautiful set of elements. Under the hood it comes with
							the best things from 2 different worlds: Figma and Tailwind.
						</p>
						<p class="my-4">
							You have many examples that can be used to create a fast prototype for your team."
						</p>
					</blockquote>
					<figcaption class="flex justify-center items-center space-x-3">
						<img
							alt="profile picture"
							class="w-9 h-9 rounded-full"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
						/>
						<div class="space-y-0.5 font-medium dark:text-white text-left">
							<div>Joseph McFall</div>
							<div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
						</div>
					</figcaption>
				</figure>
			</div>
			<div class="text-center">
				<a
					class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					href="#"
				>Show more...</a
				>
			</div>
		</div>
	</section>
	<section class="bg-white dark:bg-gray-900">
		<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
			<div class="max-w-screen-md mb-8 lg:mb-16">
				<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
					Designed for business teams like yours
				</h2>
				<p class="text-gray-500 sm:text-xl dark:text-gray-400">
					Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
					long-term value and drive economic growth.
				</p>
			</div>
			<div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
				<div>
					<div
						class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
					>
						<svg
							class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clip-rule="evenodd"
								d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
								fill-rule="evenodd"
							></path>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
					<p class="text-gray-500 dark:text-gray-400">
						Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit
						your marketing goals every month with our marketing plan.
					</p>
				</div>
				<div>
					<div
						class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
					>
						<svg
							class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
							></path>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold dark:text-white">Legal</h3>
					<p class="text-gray-500 dark:text-gray-400">
						Protect your organization, devices and stay compliant with our structured workflows and
						custom permissions made for you.
					</p>
				</div>
				<div>
					<div
						class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
					>
						<svg
							class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clip-rule="evenodd"
								d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
								fill-rule="evenodd"
							></path>
							<path
								d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
							></path>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold dark:text-white">Business Automation</h3>
					<p class="text-gray-500 dark:text-gray-400">
						Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new
						templates to help you get started.
					</p>
				</div>
				<div>
					<div
						class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
					>
						<svg
							class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
							></path>
							<path
								clip-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
								fill-rule="evenodd"
							></path>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold dark:text-white">Finance</h3>
					<p class="text-gray-500 dark:text-gray-400">
						Audit-proof software built for critical financial operations like month-end close and
						quarterly budgeting.
					</p>
				</div>
				<div>
					<div
						class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
					>
						<svg
							class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
							></path>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold dark:text-white">Enterprise Design</h3>
					<p class="text-gray-500 dark:text-gray-400">
						Craft beautiful, delightful experiences for both marketing and product with real
						cross-company collaboration.
					</p>
				</div>
				<div>
					<div
						class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
					>
						<svg
							class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clip-rule="evenodd"
								d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
								fill-rule="evenodd"
							></path>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold dark:text-white">Operations</h3>
					<p class="text-gray-500 dark:text-gray-400">
						Keep your company’s lights on with customizable, iterative, and structured workflows
						built for all efficient teams and individual.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>

</style>