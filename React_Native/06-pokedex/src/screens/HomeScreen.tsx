import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
	const { top } = useSafeAreaInsets();
	const { simplePokemonList, loadPokemons, isLoading } = usePokemonPaginated();

	return (
		<>
			<Image
				source={require('../../assets/img/pokebola.png')}
				style={globalStyles.pokebolaBG}
			/>

			<FlatList
				data={simplePokemonList}
				keyExtractor={(item) => item.id}
				numColumns={2}
				onEndReached={loadPokemons}
				onEndReachedThreshold={0.4}
				showsVerticalScrollIndicator={false}
				columnWrapperStyle={{
					justifyContent: 'center',
					alignItems: 'center',
					gap: 15,
				}}
				ListHeaderComponent={
					<Text
						style={{
							...globalStyles.title,
							...globalStyles.globalMargin,
							top: top + 20,
							marginBottom: 50,
							paddingBottom: 10,
						}}
					>
						Pokedex
					</Text>
				}
				renderItem={({ item }) => <PokemonCard pokemon={item} />}
				ListFooterComponent={
					<ActivityIndicator size={30} color='red' style={{ height: 100 }} />
				}
			/>
			{/*  */}
		</>
	);
};

export default HomeScreen;
