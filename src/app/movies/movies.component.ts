import { MovieFacade } from './../state/movies/movies.facade';
import { Component } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { getVideoId } from '../shared/recognize-video-type-id';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  movies: Movie[] = [];
  movieInput = '';
  movies$: Observable<Movie[]> = this.movieFacade.movies$;

  constructor(
    private movieFacade: MovieFacade,
    private sanitizer: DomSanitizer,
  ) { }

  addMovie(): void {
    const movieInfo = this.parseUserInput(this.movieInput);
    this.movieInput = '';
    this.movieFacade.addMovie(movieInfo);
  }

  sanitizeSrc(movie: Movie): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(movie.src as string);
  }

  parseUserInput(movieInput: string): Movie {
    const videoMetadata = getVideoId(movieInput);
    return {
      type: videoMetadata.service,
      id: videoMetadata.id,
    };
  }
}
