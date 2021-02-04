import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map, withLatestFrom } from 'rxjs/operators';
import * as fromMovie from './movies.actions';

@Injectable()
export class MovieEffects {
  store: any;

  constructor(
    private actions$: Actions,
  ) { }

  // addMovies$ = createEffect(() => this.actions$.pipe(
  //   ofType(fromMovie.addMovie),
  //   map(() => {
  //     return this.fromMovie.addMovie().pipe(
  //       delay(1000), map(() => fromMovie.addMovieSuccess({ movies })),
  //     );
  //   }),
  // ));
  addMovies$ = createEffect(() => this.actions$.pipe(
    ofType(fromMovie.addMovie),
    delay(6000),
    map((movie) => fromMovie.addMovieSuccess({ movie })
    ),
  ));
}
