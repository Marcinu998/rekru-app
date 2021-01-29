import { createReducer, on, Action } from '@ngrx/store';
import { Movie } from 'src/app/interfaces';
import { moviesInitialState, MovieState } from './movies-state';
import { addMovie } from './movies.actions';

const reducer = createReducer(
  moviesInitialState,
  on(addMovie, (state: MovieState, payload: { movie: Movie }) => ({
    ...state,
    movies: [...state.movies, payload.movie],
  })
  ),
);
export function movieReducer(state: MovieState = moviesInitialState, action: Action): MovieState {
  return reducer(state, action);
}
