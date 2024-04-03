import {Text, ScrollView} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import {useMovie} from '../../hooks/useMovie';
import {Header} from '../../components/movie/Header';
import {Details} from '../../components/movie/Details';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;

  const {movie, cast = [], isLoading} = useMovie(movieId);
  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* header */}
      <Header
        poster={movie!.poster}
        title={movie!.title}
        originalTitle={movie!.originalTitle}
      />

      <Details
        rating={movie!.rating}
        genres={movie!.genres}
        description={movie!.description}
        budget={movie!.budget}
        cast={cast}
      />
    </ScrollView>
  );
};
