import { MovieState } from './movies-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectMovieState = createFeatureSelector<MovieState>('movie');

export const selectMovie = createSelector(
  selectMovieState,
  state => state.movies,
);

export const selectLoading = createSelector(
  selectMovieState,
  state => state.loading,
);
