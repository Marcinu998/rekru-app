import { Component } from '@angular/core';
import { Movie } from '../interfaces';
import { getVideoId } from '../shared/recognize-video-type-id';
import { Store } from '@ngrx/store';
import { ProjectState } from '../interfaces';
import { addMovie } from '../state/movies/movies.actions';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  movies: Movie[] = [];
  movieInput = '';

  constructor(private store: Store<ProjectState>) { }

  addMovie(): void {
    const movieInfo = this.parseUserInput(this.movieInput);
    console.log(movieInfo);
    this.movieInput = '';
  }

  parseUserInput(movieInput: string): Movie {
    const videoMetadata = getVideoId(movieInput);
    this.store.dispatch(addMovie({ movie: [] }));
    return {
      type: videoMetadata.service,
      link: movieInput,
      id: videoMetadata.id,
    };
  }
}
