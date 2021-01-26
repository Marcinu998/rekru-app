import { createAction, props } from '@ngrx/store';

export const addMovie = createAction(
  '[getMovie] Get Movie ',
  props<{ movies: { type: string, id: string, link: string } }>()
);
