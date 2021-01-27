import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/interfaces';

export const addMovie = createAction(
  '[addMovie] Add Movie ',
  props<{ movie: Movie[] }>()
);
