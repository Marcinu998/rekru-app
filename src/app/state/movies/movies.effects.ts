import { HttpService } from './../../http/http.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as fromMovie from './movies.actions';
import { YtResponse } from './../../youtubeResponseInterface';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class MovieEffects {

  constructor(
    private actions$: Actions,
    private http: HttpService,
    private sanitizer: DomSanitizer,
  ) { }

  addMovie$ = createEffect(() => this.actions$.pipe(
    ofType(fromMovie.addMovie),
    switchMap(({ movie }) => {
      return this.http.getMovieYoutube(movie).pipe(
        map((res: YtResponse) => {
          console.log('movie repsonse: ', res);
          const newMovie = {
            ...movie,
            title: res.items[0].snippet.localized.title,
            likeCount: res.items[0].statistics.likeCount,
            viewCount: res.items[0].statistics.viewCount,
            publishedAt: res.items[0].snippet.publishedAt,
            src: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${movie.id}`),
          };
          return fromMovie.addMovieSuccess({ movie: newMovie });
        }),
      );
    }),
  ));
}
