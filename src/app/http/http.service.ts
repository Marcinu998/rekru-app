import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private movie: newMovie[] = [];
  behaviorSubject: any;

  fetchMovie(): Observable<newMovie[]> {
    return of(this.movie);
  }
  addMovie(movie: newMovie): Observable<newMovie[]> {
    this.movie.push(movie);
    return of(this.movie);
  }
}
// tslint:disable-next-line: class-name
export interface newMovie {
  link: string;
}


