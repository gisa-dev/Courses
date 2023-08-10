import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = () => {
	const { top } = useSafeAreaInsets();

	const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator color='red' size={20} />
			</View>
		);
	}

	return (
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
					/>
				</View>

				{/* Popular Movie */}
				<HorizontalSlider title='Popular' movies={popular} />
				<HorizontalSlider title='Top Rated' movies={topRated} />
				<HorizontalSlider title='Upcoming' movies={upcoming} />
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
