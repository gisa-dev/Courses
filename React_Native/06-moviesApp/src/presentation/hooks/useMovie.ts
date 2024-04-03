import {useEffect, useState} from 'react';

import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import type {FullMovie} from '../../core/entities/movie.entity';
import type {Cast} from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    const fullMoviePromise = UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId,
    );

    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId);

    const [fullMovie, castMovie] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);

    setMovie(fullMovie);
    setCast(castMovie);
    setIsLoading(false);
  };

  return {
    movie,
    cast,
    isLoading,
  };
};
