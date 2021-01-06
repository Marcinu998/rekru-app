import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private movie: Movie[] = [];
  behaviorSubject: any;

  fetchMovie(): Observable<Movie[]> {
    return of(this.movie);
  }
  addMovie(movie: Movie): Observable<Movie[]> {
    this.movie.push(movie);
    return of(this.movie);
  }
}

