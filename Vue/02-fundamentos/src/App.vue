<script setup>
import Counter from './components/Counter.vue';
</script>

<template>
	<img
		alt="Vue logo"
		class="logo"
		src="./assets/logo.svg"
		width="150"
		height="150"
	/>

	<Counter :start="100" />
</template>

