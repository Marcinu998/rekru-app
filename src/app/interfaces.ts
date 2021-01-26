export interface Movie {
  type: 'youtube' | 'vimeo' | string;
  id: string;
  link: string;
}
export interface MovieState {
  movies: Movie | any;
}
export const initialState: Movie = {
  type: '',
  id: '',
  link: ''
};
