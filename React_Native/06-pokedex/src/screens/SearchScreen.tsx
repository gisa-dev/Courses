import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Platform,
	Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { globalStyles } from '../theme/appTheme';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const SearchScreen = () => {
	const { top } = useSafeAreaInsets();
	const { isFetching, simplePokemonList } = usePokemonSearch();
	const [term, setTerm] = useState('');
	const [filteredPokemon, setFilteredPokemon] = useState<SimplePokemon[]>([]);

	useEffect(() => {
		if (term.length === 0) {
			return setFilteredPokemon([]);
		}

		if (isNaN(Number(term))) {
			const filterdSimplePokemon = simplePokemonList.filter((poke) =>
				poke.name.toLowerCase().includes(term.toLowerCase()),
			);

			setFilteredPokemon(filterdSimplePokemon);
		} else {
			const findPokemon = simplePokemonList.find((poke) => poke.id === term);

			setFilteredPokemon(findPokemon ? [findPokemon] : []);
		}
	}, [term]);

	if (isFetching) {
		return <Loading />;
	}

	return (
		<View
			style={{
				flex: 1,

				marginHorizontal: 20,
			}}
		>
			<SearchInput
				onDebounce={(value) => setTerm(value)}
				style={{
					position: 'absolute',
					zIndex: 10,
					width: '100%',
					top: Platform.OS === 'ios' ? top : top + 10,
				}}
			/>

			<FlatList
				data={filteredPokemon}
				keyExtractor={(item) => item.id}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				columnWrapperStyle={{
					gap: 15,
				}}
				ListHeaderComponent={
					<Text
						style={{
							...globalStyles.title,
							...globalStyles.globalMargin,
							marginTop: top + 50,
							paddingBottom: 10,
						}}
					>
						{term}
					</Text>
				}
				renderItem={({ item }) => <PokemonCard pokemon={item} />}
				ListEmptyComponent={() => (
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Image
							source={require('../../assets/img/pokebola.png')}
							style={{ width: 300, height: 300 }}
						/>
						<Text style={{ fontSize: 25, fontWeight: 'bold' }}>
							Search a Pokemon
						</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({});
