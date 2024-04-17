import {pokeApi} from '../../config';
import type {Pokemon} from '../../domain/pokemon';
import type {PokeAPIPokemon} from '../../infrastructure/interfaces/pokeapi.interface';
import {PokemonMapper} from '../../infrastructure/mappers/pokemon.mapper';

export const getPokemonById = async (id: number): Promise<Pokemon> => {
  try {
    const {data} = await pokeApi.get<PokeAPIPokemon>(`/pokemon/${id}`);

    const pokemon = await PokemonMapper.pokeApiPokemonToEntity(data);

    return pokemon;
  } catch (error) {
    throw new Error(`Error getting pokemon by id: ${id}`);
  }
};
