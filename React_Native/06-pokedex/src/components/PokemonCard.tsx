import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Image,
} from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
	pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
	return (
		<TouchableOpacity activeOpacity={0.8} style={{ ...styles.cardContainer }}>
			<View>
				<Text style={styles.name}>
					{pokemon.name} {'\n#' + pokemon.id}
				</Text>
			</View>

			<View style={styles.pokeballContainer}>
				<Image
					source={require('../../assets/img/pokebola-blanca.png')}
					style={styles.pokeball}
				/>
			</View>

			<FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
		</TouchableOpacity>
	);
};

export default PokemonCard;

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: 'red',
		height: 120,
		width: windowWidth * 0.43,
		borderRadius: 10,
		marginBottom: 25,
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	name: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		top: 20,
		left: 10,
		textTransform: 'capitalize',
	},
	pokeballContainer: {
		width: 100,
		height: 100,
		position: 'absolute',
		bottom: 0,
		right: 0,
		overflow: 'hidden',
	},
	pokeball: {
		width: 100,
		height: 100,
		position: 'absolute',
		bottom: -20,
		right: -20,
		opacity: 0.5,
	},
	pokemonImage: {
		width: 120,
		height: 120,
		position: 'absolute',
		bottom: -5,
		right: -8,
	},
});
