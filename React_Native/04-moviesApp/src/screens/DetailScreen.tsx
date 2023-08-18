import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	ScrollView,
	ActivityIndicator,
	Platform,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { RootStackParams } from '../navigator/StackNavigator';
import { useMovieDetails } from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const DetailScreen = ({ route, navigation }: Props) => {
	const movie = route.params;
	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	const { isLoading, movieFull, cast } = useMovieDetails(movie.id);

	return (
		<ScrollView>
			{Platform.OS === 'ios' ? (
				<View style={styles.backButton}>
					<TouchableOpacity onPress={() => navigation.pop()}>
						<MaterialIcons name='arrow-back-ios' size={40} color='white' />
					</TouchableOpacity>
				</View>
			) : (
				<View style={styles.backButton}>
					<TouchableOpacity onPress={() => navigation.pop()}>
						<MaterialIcons name='arrow-back' size={40} color='white' />
					</TouchableOpacity>
				</View>
			)}

			<View style={styles.imageContainer}>
				<View style={{ ...styles.imageBorder, ...styles.imageBorderShadow }}>
					<Image source={{ uri }} style={styles.image} />
				</View>
			</View>
			<View style={styles.marginContainer}>
				<Text style={styles.title}>{movie.title}</Text>
			</View>

			{isLoading ? (
				<ActivityIndicator size={35} color='gray' style={{ marginTop: 20 }} />
			) : (
				<MovieDetails movieFull={movieFull!} cast={cast} />
			)}
		</ScrollView>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({
	imageContainer: {
		width: '100%',
		height: screenHeight * 0.7,
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
	},
	imageBorder: {
		flex: 1,
		backgroundColor: 'white',
		overflow: 'hidden',
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
	},
	imageBorderShadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,
		elevation: 10,
	},
	image: {
		flex: 1,
	},
	marginContainer: {
		marginHorizontal: 20,
		marginTop: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	backButton: {
		position: 'absolute',
		zIndex: 1,
		elevation: 9,
		top: 30,
		left: 10,
	},
});
