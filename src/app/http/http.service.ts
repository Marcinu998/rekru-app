import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private movie: Movie[] = [];
  behaviorSubject: any;

  fetchMovies(): Observable<Movie[]> {
    return of(this.movie);
  }
  addMovie(movie: Movie): Observable<Movie[]> {
    this.movie.push(movie);
    return of(this.movie);
  }
}
export interface Movie {
  link: string;
}


