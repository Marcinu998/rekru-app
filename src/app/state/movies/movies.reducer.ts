import { createReducer, on, Action } from '@ngrx/store';
import { Movie } from 'src/app/interfaces';
import { moviesInitialState, MovieState } from './movies-state';
import * as fromMovie from './movies.actions';

const reducer = createReducer(
  moviesInitialState,
  on(fromMovie.addMovie, (state: MovieState, payload: { movie: Movie }) => {
    const flagged = { ...payload.movie, loading: true };
    return {
      ...state,
      movies: [...state.movies, flagged]
    };
  }
  ),
  on(fromMovie.addMovieSuccess, (state: MovieState, payload: { movie: Movie }) => {
    const newMovies = state.movies.map(movieFromState => {
      if (
        movieFromState.id !== payload.movie.id) {
        return movieFromState;
      }
      return {
        ...payload.movie,
        loading: false
      };
    });
    return {
      ...state,
      movies: newMovies,
    };
  }
  )
);
export function movieReducer(state: MovieState = moviesInitialState, action: Action): MovieState {
  return reducer(state, action);
}
