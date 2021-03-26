import { YtResponse } from './../youtubeResponseInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }

  public getMovieYoutube(movie: Movie): Observable<YtResponse> {
    const key = 'AIzaSyCdgrAbszG28hJJw_zInz-xm4PqY6aa3tw';
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${movie.id}&key=${key}&part=snippet,statistics`;
    const request = this.http.get<YtResponse>(url);
    // console.log(url);
    return this.handleRequest<YtResponse>(request);
  }
  public handleRequest<T = any>(requestObservable: Observable<T>): Observable<T> {
    return requestObservable;
  }
}

