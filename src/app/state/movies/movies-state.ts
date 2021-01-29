import { Movie } from './../../interfaces';

export interface MovieState {
  movies: Movie[];
}
export const moviesInitialState: MovieState = {
  movies: [],
};
