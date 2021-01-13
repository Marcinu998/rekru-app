import { Component } from '@angular/core';
import { Movie } from '../interfaces';

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
    return {
      type: 'youtube | vimeo',
      link: movieInput,
      id: ''
    };
  }
}
