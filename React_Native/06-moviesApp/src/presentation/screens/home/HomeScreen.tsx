import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useMovies} from '../../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
    topRatedNextPage,
    upcomingNextPage,
  } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Main */}
        <PosterCarousel movies={nowPlaying} />
        <HorizontalCarousel
          movies={popular}
          title="Populars"
          loadNextPage={popularNextPage}
        />
        <HorizontalCarousel
          movies={topRated}
          title="Top Rated"
          loadNextPage={topRatedNextPage}
        />
        <HorizontalCarousel
          movies={upcoming}
          title="Upcoming"
          loadNextPage={upcomingNextPage}
        />
      </View>
    </ScrollView>
  );
};
