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
import { useEffect, useRef, useState } from 'react';
import { getColors } from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Stack';

const windowWidth = Dimensions.get('window').width;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'Home'>;

interface Props {
	pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
	const navigation = useNavigation<HomeScreenNavigationProp>();
	const [bgColor, setBgColor] = useState('gray');
	const isMounted = useRef(true);

	useEffect(() => {
		getColors(pokemon.picture, { fallback: '#808080' }).then((colors) => {
			if (!isMounted.current) return;

			if (colors.platform === 'android') {
				setBgColor(colors.dominant || 'gray');
			}

			if (colors.platform === 'ios') {
				setBgColor(colors.background || 'gray');
			}
		});

		return () => {
			isMounted.current = false;
		};
	}, []);

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={{ ...styles.cardContainer, backgroundColor: bgColor }}
			onPress={() => {
				navigation.navigate('Pokemon', {
					simplePokemon: pokemon,
					color: bgColor,
				});
			}}
		>
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
		backgroundColor: 'gray',
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
