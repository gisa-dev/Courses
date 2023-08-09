import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/movieInterface';

interface Props {
	movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {
	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	console.log(movie.poster_path);
	return (
		<View>
			<Image
				source={{ uri }}
				resizeMode='contain'
				style={StyleSheet.image}
			/>
		</View>
	);
};

const styles = StyleSheet.create({

})