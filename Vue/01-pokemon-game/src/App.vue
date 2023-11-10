<script>
import PokemonPage from './pages/PokemonPage.vue';

export default {
	name: 'App',
	components: {
		PokemonPage,
	},
};
</script>

<template>
	<PokemonPage />
</template>

<style>
#app {
	display: grid;
	place-items: center;
	font-family: Avenir, Arial, Helvetica, sans-serif;
	-webkit-font-smoothing: antialised;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
