import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map } from 'rxjs/operators';
import * as fromMovie from './movies.actions';

@Injectable()
export class MovieEffects {

  constructor(
    private actions$: Actions,
  ) { }

  addMovie$ = createEffect(() => this.actions$.pipe(
    ofType(fromMovie.addMovie),
    delay(2000),
    map((movie) => fromMovie.addMovieSuccess(movie),
    ),
  ));
}
