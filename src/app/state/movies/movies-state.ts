import { Movie } from './../../interfaces';

export interface MovieState {
  loading: boolean;
  movies: Movie[];
}
export const moviesInitialState: MovieState = {
  loading: true,
  movies: [],
};
