import { createReducer, on, Action } from '@ngrx/store';
import { initialState, Movie } from 'src/app/interfaces';
import { addMovie } from './movies.actions';

export const reducer = createReducer(
  initialState as Movie,
  on(addMovie, (state: Movie) => ({
    ...state,
  })),
);

export function AppReducer(state: Movie, action: Action): Movie {
  return reducer(state as Movie, action as Action);
}
