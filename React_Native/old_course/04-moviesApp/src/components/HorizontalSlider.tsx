import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { MoviePoster } from './MoviePoster';
import { Movie } from '../interfaces/movieInterface';

interface Props {
	title?: string;
	movies: Movie[];
}

const HorizontalSlider = ({ title, movies }: Props) => {
	return (
		<View style={{ height: title ? 260 : 220 }}>
			<Text
				style={{
					marginLeft: 8,
					marginVertical: 3,
					fontSize: 30,
					fontWeight: 'bold',
				}}
			>
				{title}
			</Text>
			<FlatList
				data={movies}
				renderItem={({ item }) => (
					<MoviePoster movie={item} width={140} height={200} />
				)}
				keyExtractor={(item) => item.id.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default HorizontalSlider;
