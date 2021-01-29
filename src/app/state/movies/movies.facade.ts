import { Movie } from 'src/app/interfaces';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../index';
import * as  fromMovie from './movies.actions';

@Injectable()
export class MovieFacade {
  public movies$ = this.store;

  constructor(
    private store: Store<AppState>,
  ) { }

  public addMovie(movie: Movie): void {
    this.store.dispatch(fromMovie.addMovie({ movie }));
  }
}
