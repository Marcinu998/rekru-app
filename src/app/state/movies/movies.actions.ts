import { createAction, props } from '@ngrx/store';

export const addMovie = createAction(
  '[getMovie] Get Movie ',
  props<{ movies: object }>()
);
