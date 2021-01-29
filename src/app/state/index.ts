import { MovieFacade } from './movies/movies.facade';
import { movieReducer } from './movies';
import { MovieState } from './movies/movies-state';
export interface AppState {
  movie: MovieState;
  movieFacade: MovieFacade;
}
export const reducers = {
  movie: movieReducer,
};
export const facades = [
  MovieFacade
];
