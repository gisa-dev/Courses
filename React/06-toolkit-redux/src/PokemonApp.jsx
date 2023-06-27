import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
	const {
		isLoading,
		page,
		pokemons = [],
	} = useSelector((state) => state.pokemons);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemons());
	}, []);

	return (
		<>
			<h1>PokemonApp</h1>
			<hr />

			{isLoading ? (
				<span>Loading...</span>
			) : (
				<ul>
					{pokemons.map((pokemon) => (
						<li key={pokemon.name} className='capitalize'>
							{pokemon.name}
						</li>
					))}
				</ul>
			)}

			<button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
				Next
			</button>
		</>
	);
};
