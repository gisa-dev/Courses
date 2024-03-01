import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props {
	movie: Movie;
	height?: number;
	width?: number;
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'Home'>;

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	const navigation = useNavigation<HomeScreenNavigationProp>();

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('Detail', movie)}
			activeOpacity={0.8}
			style={{
				width,
				height,
				marginHorizontal: 2,
				paddingBottom: 20,
				paddingHorizontal: 7,
			}}
		>
			<View style={{...styles.imageContainer,...styles.imageContainerShadow}}>
				<Image source={{ uri }} style={styles.image} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		backgroundColor: 'white',
		borderRadius: 18,
		overflow: 'hidden',
	},
	imageContainerShadow: {
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
});
