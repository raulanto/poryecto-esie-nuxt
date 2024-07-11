<template>
	<button
		:class="[,`btn-${props.type}`, { 'my-button--disabled': props.disabled }]"
		:disabled="props.disabled"
		@click="handleClick"
		aria-label="button"
	>
		<slot></slot>
	</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
	type: {
		type: String,
		default: 'default',
		validator: (value) => ['default', 'red', 'green'].includes(value),
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
	if (!props.disabled) {
		emit('click', event);
	}
};
</script>

<style scoped>



.my-button {
	padding: 0.5em 1em;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 1rem;
}

.my-button--primary {
	background-color: #007bff;
	color: white;
}

.my-button--secondary {
	background-color: #6c757d;
	color: white;
}

.my-button--danger {
	background-color: #dc3545;
	color: white;
}

.my-button--disabled {
	background-color: #dcdcdc;
	color: #6c757d;
	cursor: not-allowed;
}
</style>
