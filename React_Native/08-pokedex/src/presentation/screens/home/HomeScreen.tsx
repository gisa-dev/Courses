import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useInfiniteQuery, useQueryClient} from '@tanstack/react-query';
import {FAB, Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../../../config';
import {getPokemons} from '../../../actions';
import {PokeBallBg, PokemonCard} from '../../components';
import {useThemeContext} from '../../hooks/useThemeContext';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreen = ({navigation}:Props) => {
  const {top} = useSafeAreaInsets();
  const queryClient = useQueryClient();

  const {isDark, theme} = useThemeContext();

  // Esta es una peticion tracional de http
  // const {isLoading, data: pokemons = []} = useQuery({
  //   queryKey: ['pokemons'],
  //   queryFn: () => getPokemons(0),
  //   staleTime: 1000 * 60 * 60, // 60 minutes
  // });

  const {data, fetchNextPage} = useInfiniteQuery({
    queryKey: ['pokemons', 'infinite'],
    initialPageParam: 0,
    queryFn: async params => {
      const pokemons = await getPokemons(params.pageParam);
      pokemons.forEach(pokemon => {
        queryClient.setQueryData(['pokemon', pokemon.id], pokemon);
      });

      return pokemons;
    },
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

      <FAB
        icon={props => <Icon name="search-outline" {...props} />}
        style={[globalStyles.fab, {backgroundColor: theme.colors.primary}]}
        mode="elevated"
        onPress={() => navigation.push('SearchScreen')}
        color={isDark ? 'black' : 'white'}
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
