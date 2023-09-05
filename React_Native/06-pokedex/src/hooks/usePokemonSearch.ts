import { useEffect, useRef, useState } from 'react';
import {
	PokemonPaginatedResponse,
	Result,
	SimplePokemon,
} from '../interfaces/pokemonInterfaces';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemonSearch = () => {
	const [isFetching, setIsFetching] = useState(true);
	const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
		[],
	);

	const loadPokemons = async () => {
		const resp = await pokemonApi.get<PokemonPaginatedResponse>(
			'https://pokeapi.co/api/v2/pokemon?limit=1200',
		);
		mapPokemonList(resp.data.results);
		setIsFetching(false);
	};

	const mapPokemonList = (pokemonList: Result[]) => {
		const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
			const urlParts = url.split('/');
			const id = urlParts[urlParts.length - 2];
			const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

			return { id, picture, name };
		});

		setSimplePokemonList(newPokemonList);
	};

	useEffect(() => {
		loadPokemons();
	}, []);

	return {
		simplePokemonList,
		isFetching,
	};
};
