import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {getPokemons} from '../../../actions';
import {PokeBallBg, PokemonCard} from '../../components';
import {Text} from 'react-native-paper';
import {globalStyles} from '../../../config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  // Esta es una peticion tracional de http
  // const {isLoading, data: pokemons = []} = useQuery({
  //   queryKey: ['pokemons'],
  //   queryFn: () => getPokemons(0),
  //   staleTime: 1000 * 60 * 60, // 60 minutes
  // });

  const {isLoading, data, fetchNextPage} = useInfiniteQuery({
    queryKey: ['pokemons', 'infinite'],
    initialPageParam: 0,
    queryFn: params => getPokemons(params.pageParam),
    getNextPageParam: (lastPage, pages) => pages.length,
    staleTime: 1000 * 60 * 60, // 60 minutes
  });

  return (
    <View style={globalStyles.globalMargin}>
      <PokeBallBg style={styles.imgPosition} />
      <FlatList
        data={data?.pages.flat() ?? []}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={{
          paddingTop: top + 20,
        }}
        renderItem={({item}) => <PokemonCard key={item.id} pokemon={item} />}
        ListHeaderComponent={<Text variant="displayMedium">Pokedex</Text>}
        onEndReachedThreshold={0.6}
        onEndReached={() => fetchNextPage()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
});
