import {Pokemon} from '../../domain/pokemon';
import {getPokemonById} from './get-pokemon-by-id';

export const getPokemonsByIds = async (ids: number[]): Promise<Pokemon[]> => {
  try {
    const pokemonPromises: Promise<Pokemon>[] = ids.map(id => {
      return getPokemonById(id);
    });

    return await Promise.all(pokemonPromises);
  } catch (error) {
    throw new Error(`Error getting pokemons by ids: ${ids}`);
  }
};
