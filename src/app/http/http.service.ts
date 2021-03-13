import { Movie } from './../interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  movies: Movie[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  public getMovieYoutube(movie: Movie): Observable<Movie> {
    const key = 'AIzaSyCdgrAbszG28hJJw_zInz-xm4PqY6aa3tw';
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${movie.id}&key=${key}
    &part=snippet,contentDetails,statistics,status`;
    const request = this.http.get<Movie>(url);
    // console.log(movie);
    return this.handleRequest<Movie>(request);
  }
  public handleRequest<T = any>(requestObservable: Observable<T>): Observable<T> {
    return requestObservable;
  }
}

