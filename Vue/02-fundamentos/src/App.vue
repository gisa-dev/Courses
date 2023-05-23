<script>
// import Counter from './components/Counter.vue';
import Indecision from './components/Indecision.vue';

export default {
	name: 'App',
	components: {
		Indecision,
	},
};
</script>

<template>
	<!-- <img
		alt="Vue logo"
		class="logo"
		src="./assets/logo.svg"
		width="150"
		height="150"
	/>

	<Counter :start="100" /> -->

	<Indecision />
</template>
