import { createReducer, on, Action, ActionReducerMap } from '@ngrx/store';
import { moviesInitialState, MovieState } from './movies-state';
import { addMovie } from './movies.actions';

const reducer = createReducer(
  moviesInitialState,
  on(addMovie, (state: MovieState) => ({
    ...state,
  })),
);
// export const reducers: ActionReducerMap<MovieState> = {
//   movies: Array,
// };
export function movieReducer(state: MovieState = moviesInitialState, action: Action): MovieState {
  return reducer(state, action);
}
