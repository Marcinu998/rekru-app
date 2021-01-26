import { MovieState } from './../../interfaces';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppReducer } from './movies.reducer';

export const reducers: ActionReducerMap<MovieState> = {
  movies: AppReducer,
};
export const metaReducers: MetaReducer<MovieState>[] = [];
