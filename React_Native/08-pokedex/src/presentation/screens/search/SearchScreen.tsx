import {FlatList, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {ActivityIndicator, Text, TextInput} from 'react-native-paper';
import {globalStyles} from '../../../config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pokemon} from '../../../domain/pokemon';
import {FullScreenLoader, PokemonCard} from '../../components';
import {useQuery} from '@tanstack/react-query';
import {getPokemonNamesWithId, getPokemonsByIds} from '../../../actions';
import { useDebouncedValue } from '../../hooks/useDebouncedValue';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState('');

  const debouncedValue = useDebouncedValue(term)

  const {isLoading, data: pokemonNameList = []} = useQuery({
    queryKey: ['pokemons', 'all'],
    queryFn: () => getPokemonNamesWithId(),
  });

  const pokemonNameIdList = useMemo(() => {
    if (!isNaN(Number(debouncedValue))) {
      const pokemon = pokemonNameList.find(
        pokemon => pokemon.id === Number(debouncedValue),
      );

      return pokemon ? [pokemon] : [];
    }

    if (debouncedValue.length === 0) {
      return [];
    }

    if (debouncedValue.length < 3) {
      return [];
    }

    return pokemonNameList.filter(pokemon =>
      pokemon.name.includes(debouncedValue.toLocaleLowerCase()),
    );
  }, [debouncedValue]);

  const {isLoading: isLoadingPokemons, data: pokemons = []} = useQuery({
    queryKey: ['pokemons', 'by', pokemonNameIdList],
    queryFn: () =>
      getPokemonsByIds(pokemonNameIdList.map(pokemon => pokemon.id)),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <View style={[globalStyles.globalMargin, {paddingTop: top + 10}]}>
      <TextInput
        placeholder="Search Pokemon"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChangeText={setTerm}
        value={term}
      />
      {isLoadingPokemons && <ActivityIndicator style={{paddingTop: 20}} />}

      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={{
          paddingTop: top + 20,
        }}
        renderItem={({item}) => <PokemonCard key={item.id} pokemon={item} />}
        ListFooterComponent={<View style={{height: 100}} />}
      />
    </View>
  );
};
