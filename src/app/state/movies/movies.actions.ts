import { Movie } from 'src/app/interfaces';
import { createAction, props } from '@ngrx/store';

export const addMovie = createAction(
  '[addMovie] Add Movie ',
  props<{ movie: Movie }>()
);
export const addMovieSuccess = createAction(
  '[addMovie] Add Movie Success',
  props<{ movie: Movie[] }>());
