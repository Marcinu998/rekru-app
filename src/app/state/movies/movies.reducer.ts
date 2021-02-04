import { createReducer, on, Action } from '@ngrx/store';
import { Movie } from 'src/app/interfaces';
import { moviesInitialState, MovieState } from './movies-state';
import * as fromMovie from './movies.actions';

const reducer = createReducer(
  moviesInitialState,
  on(fromMovie.addMovie, (state: MovieState, payload: { movie: Movie }) => ({
    ...state,
    movies: [...state.movies, payload.movie],
    loading: true,
  })),
  on(fromMovie.addMovieSuccess, (state: MovieState, { movie }) => ({
    ...state,
    movie,
    loading: false,
  })),
);
export function movieReducer(state: MovieState = moviesInitialState, action: Action): MovieState {
  return reducer(state, action);
}
