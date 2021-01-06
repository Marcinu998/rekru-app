import { Movie } from '../interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  movies: Movie[] = [];
  newMovieInput: Movie[] = [];
  value = '';
  addMovies = [];

  constructor() { }

  addMovie(): void {
    console.log('działa');
    this.newMovieInput = [];
  }

}
