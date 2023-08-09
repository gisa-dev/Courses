import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';

const HomeScreen = () => {
	const { top } = useSafeAreaInsets();

	const { moviesNowPlaying, isLoading } = useMovies();

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator color='red' size={20} />
			</View>
		);
	}

	return (
		<View style={{ marginTop: top + 20 }}>
			<MoviePoster movie={moviesNowPlaying[0]}/>
		</View>
	);
};

export default HomeScreen;
