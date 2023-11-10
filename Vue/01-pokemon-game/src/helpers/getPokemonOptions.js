const getPokemons = () => {
	const pokemonsArr = Array.from(Array(649));

	return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonOptions = () => {
	const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
	console.log(mixedPokemons);
};

export default getPokemonOptions;
