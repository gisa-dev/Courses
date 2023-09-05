import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
	pokemon: PokemonFull;
}

const PokemonDetails = ({ pokemon }: Props) => {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{
				...StyleSheet.absoluteFillObject,
				marginTop: 360,
			}}
		>
			<View style={styles.container}>
				<Text style={styles.title}>Types</Text>
				<View style={{ flexDirection: 'row', gap: 10 }}>
					{pokemon.types.map(({ type }) => (
						<Text key={type.name} style={styles.regularText}>
							{type.name}
						</Text>
					))}
				</View>
				<Text style={styles.title}>Weight</Text>
				<Text style={{ ...styles.regularText, textTransform: 'lowercase' }}>
					{pokemon.weight / 10}Kg
				</Text>
			</View>

			<View style={styles.container}>
				<Text style={styles.title}>Sprites</Text>
			</View>

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<FadeInImage
					uri={pokemon.sprites.front_default}
					style={styles.basicSprite}
				/>
				<FadeInImage
					uri={pokemon.sprites.back_default}
					style={styles.basicSprite}
				/>
				<FadeInImage
					uri={pokemon.sprites.front_shiny}
					style={styles.basicSprite}
				/>
				<FadeInImage
					uri={pokemon.sprites.back_shiny}
					style={styles.basicSprite}
				/>
			</ScrollView>

			<View style={styles.container}>
				<Text style={styles.title}>Base Skills</Text>

				<View style={{ flexDirection: 'row', gap: 10 }}>
					{pokemon.abilities.map(({ ability }) => (
						<Text key={ability.name} style={styles.regularText}>
							{ability.name}
						</Text>
					))}
				</View>
			</View>

			<View style={styles.container}>
				<Text style={styles.title}>Moves</Text>

				<View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
					{pokemon.moves.map(({ move }) => (
						<Text key={move.name} style={styles.regularText}>
							{move.name}
						</Text>
					))}
				</View>
			</View>

			<View style={styles.container}>
				<Text style={styles.title}>Stats</Text>

				<View>
					{pokemon.stats.map(({ stat, base_stat }) => (
						<View key={stat.name} style={{ flexDirection: 'row', gap: 10 }}>
							<Text style={{ ...styles.regularText, width: 150 }}>
								{stat.name}{' '}
							</Text>
							<Text style={{ ...styles.regularText, fontWeight: 'bold' }}>
								{base_stat}
							</Text>
						</View>
					))}
				</View>

				<View style={{ marginBottom: 20, alignItems: 'center' }}>
					<FadeInImage
						uri={pokemon.sprites.front_default}
						style={styles.basicSprite}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default PokemonDetails;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 22,
		marginTop: 20,
	},
	regularText: {
		fontSize: 19,
		textTransform: 'capitalize',
	},
	basicSprite: {
		width: 100,
		height: 100,
	},
});
