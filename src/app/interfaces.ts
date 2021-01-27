export interface Movie {
  type: 'youtube' | 'vimeo';
  id: string;
  link: string;
}
export interface ProjectState {
  movies: Array<string> | any;
}
export const initialState: ProjectState = {
  movies: [],
};

