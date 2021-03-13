import { HttpService } from './../../http/http.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as fromMovie from './movies.actions';

@Injectable()
export class MovieEffects {

  constructor(
    private actions$: Actions,
    private http: HttpService,
  ) { }

  // addMovie$ = createEffect(() => this.actions$.pipe(
  //   ofType(fromMovie.addMovie),
  //   delay(2000),
  //   map((movie) => fromMovie.addMovieSuccess(movie),
  //   ),
  // ));

  addMovie$ = createEffect(() => this.actions$.pipe(
    ofType(fromMovie.addMovie),
    switchMap(({ movie }) => {
      return this.http.getMovieYoutube(movie).pipe(
        map((movie) => fromMovie.addMovieSuccess({ movie })),
      );
    }),
  ));
}
