import { MovieFacade } from './../state/movies/movies.facade';
import { Component } from '@angular/core';
import { Movie } from '../interfaces';
import { getVideoId } from '../shared/recognize-video-type-id';
import { Store } from '@ngrx/store';
import { AppState } from '../state/index';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  movies: Movie[] = [];
  movieInput = '';

  constructor(
    private store: Store<AppState>,
    private movieFacade: MovieFacade,
  ) { }

  addMovie(): void {
    const movieInfo = this.parseUserInput(this.movieInput);
    this.movieInput = '';
    this.movieFacade.addMovie(movieInfo);
  }

  parseUserInput(movieInput: string): Movie {
    const videoMetadata = getVideoId(movieInput);
    return {
      type: videoMetadata.service,
      link: movieInput,
      id: videoMetadata.id,
    };
  }
}
