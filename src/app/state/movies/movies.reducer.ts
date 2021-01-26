import { reducers } from './movies-state';
import { createReducer, on, Action } from '@ngrx/store';
import { initialState, MovieState, Movie } from 'src/app/interfaces';
import { addMovie } from './movies.actions';

export const reducer = createReducer(
  initialState as MovieState,
  on(addMovie, (state: MovieState) => ({
    ...state,
  })),
);

export function AppReducer(state: MovieState, action: Action): Movie {
  return reducers(state as MovieState, action as Action);
}
