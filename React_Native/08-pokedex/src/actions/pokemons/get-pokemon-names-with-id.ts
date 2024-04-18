import type {PokeAPIPaginetedResponse} from './../../infrastructure/interfaces/pokeapi.interface';
import {pokeApi} from '../../config';

export const getPokemonNamesWithId = async () => {
  const url = `pokemon?limit=1000`;
  const {data} = await pokeApi.get<PokeAPIPaginetedResponse>(url);

  return data.results.map(info => ({
    id: Number(info.url.split('/')[6]),
    name: info.name,
  }));
};
