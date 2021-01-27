import { ProjectState } from './../../interfaces';
import { ActionReducerMap } from '@ngrx/store';
import { Movie } from './../../interfaces';
import { projectReducer } from './movies.reducer';

export const reducers: ActionReducerMap<ProjectState> = {
  movies: Array,
};
export type Movies = {
  movies: Movie[];
};
