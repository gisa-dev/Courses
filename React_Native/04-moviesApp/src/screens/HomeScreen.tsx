import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = () => {
	const { top } = useSafeAreaInsets();

	const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

	const getPosterColors = (index: number) => {
		const movie = nowPlaying[index];
		const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

		ImageColors.getColors(uri, {}).then((colors) => console.log({ colors }));
	};

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator color='red' size={20} />
			</View>
		);
	}

	return (
		<GradientBackground>
			<ScrollView>
				<View style={{ marginTop: top + 20 }}>
					{/* Main Carousel */}
					<View style={{ height: 440 }}>
						<Carousel
							data={nowPlaying}
							renderItem={({ item }) => <MoviePoster movie={item} />}
							sliderWidth={windowWidth}
							itemWidth={300}
							inactiveSlideOpacity={0.9}
							onSnapToItem={(index) => getPosterColors(index)}
						/>
					</View>

					{/* Popular Movie */}
					<HorizontalSlider title='Popular' movies={popular} />
					<HorizontalSlider title='Top Rated' movies={topRated} />
					<HorizontalSlider title='Upcoming' movies={upcoming} />
				</View>
			</ScrollView>
		</GradientBackground>
	);
};

export default HomeScreen;
