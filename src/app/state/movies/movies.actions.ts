import { createAction, props } from '@ngrx/store';

export const addMovie = createAction('[addMovie] Add Movie ',
  props<{ movie: {} }>()
);
