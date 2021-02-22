import { MovieEffects } from './movies/movies.effects';
import { MovieFacade } from './movies/movies.facade';
import { movieReducer } from './movies';
import { MovieState } from './movies/movies-state';
export interface AppState {
  movie: MovieState;
}
export const reducers = {
  movie: movieReducer,
};
export const effects = [
  MovieEffects
];

export const facades = [
  MovieFacade
];
