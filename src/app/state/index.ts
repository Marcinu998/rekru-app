import { movieReducer } from './movies';
import { MovieState } from './movies/movies-state';

export interface AppState {
  movie: MovieState;
}
export const reducers = {
  movie: movieReducer,
};
