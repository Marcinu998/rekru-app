import { createReducer, on, Action } from '@ngrx/store';
import { initialState, ProjectState } from 'src/app/interfaces';
import { addMovie } from './movies.actions';

export const reducer = createReducer(
  initialState,
  on(addMovie, (state: ProjectState) => ({
    ...state,
  })),
);

export function projectReducer(state: ProjectState, action: Action): ProjectState {
  return reducer(state, action);
}
