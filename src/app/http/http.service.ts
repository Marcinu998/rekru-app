import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private movies: Movies[] = [];

  fetchMovies(): Observable<Movies[]> {
    return of(this.movies);
  }
  addMovie(movies: Movies): Observable<Movies[]> {
    this.movies.push(movies);
    return of(this.movies);
  }
}
export interface Movies {
  link: string;
}


