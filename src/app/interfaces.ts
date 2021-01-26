export interface Movie {
  type: 'youtube' | 'vimeo';
  id: string;
  link: string;
}
export interface MovieState {
  movies: Movie[] | any;
}
export const initialState: MovieState = {
  movies: [],
};
