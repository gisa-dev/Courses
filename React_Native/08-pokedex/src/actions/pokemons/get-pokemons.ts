import {pokeApi} from '../../config';
import type {Pokemon} from '../../domain/pokemon';
import type {
  PokeAPIPaginetedResponse,
  PokeAPIPokemon,
} from '../../infrastructure/interfaces/pokeapi.interface';
import {PokemonMapper} from '../../infrastructure/mappers/pokemon.mapper';

export const getPokemons = async (
  page: number,
  limit: number = 20,
): Promise<Pokemon[]> => {
  try {
    const url = `/pokemon?offset=${page * 10}&limit=${limit}`;

    const {data} = await pokeApi.get<PokeAPIPaginetedResponse>(url);

    const pokemonPromises = data.results.map(info => {
      return pokeApi.get<PokeAPIPokemon>(info.url);
    });

    const pokeApiPokemons = await Promise.all(pokemonPromises);

    const pokemonsPromises = pokeApiPokemons.map(item =>
      PokemonMapper.pokeApiPokemonToEntity(item.data),
    );

    return await Promise.all(pokemonsPromises);
  } catch (error) {
    throw new Error(`Error getting pokemons ${error}`);
  }
};
