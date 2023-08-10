import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/movieInterface';

interface Props {
	movie: Movie;
	height?: number;
	width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<View
			style={{
				width,
				height,
				marginHorizontal: 8
			}}
		>
			<View style={styles.imageContainer}>
				<Image source={{ uri }} style={styles.image} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,
		elevation: 10,
		borderRadius: 18,
	},
	image: {
		flex: 1,
		borderRadius: 18,
	},
});
