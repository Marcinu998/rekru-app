import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { Movie } from '../interfaces';
import { getVideoId } from '../shared/recognize-video-type-id';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  movies: Movie[] = [];
  movieInput = '';


  constructor() { }


  addMovie(): void {
    const movieInfo = this.parseUserInput(this.movieInput);
    this.movieInput = '';
    console.log(movieInfo);
  }

  parseUserInput(movieInput: string): Movie {
    const videoMetadata = getVideoId(movieInput);
    console.log(videoMetadata);
    return {
      type: videoMetadata.service,
      link: movieInput,
      id: videoMetadata.id,
    };
  }
}
