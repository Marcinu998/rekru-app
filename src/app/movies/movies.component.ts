import { newMovie } from './../http/http.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseHttpService } from './../http/base-http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies: newMovie[] = [];
  movie: newMovie = { id: '', type: 'youtube | vimeo' };
  private subscriptions = new Subscription();

  constructor(private baseHttpService: BaseHttpService) { }

  ngOnInit(): void {
    const sub = this.baseHttpService.behaviorSubject.subscribe(
      (data: newMovie[]) => {
        this.movies = data;
        console.log('Movies Subscription ');
      },
      error => console.error(error),
      () => console.log('MoviesComponent complete?')
    );
    this.subscriptions.add(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  // addMovie(): void {
  //   this.baseHttpService.addMovie(this.movie);
  //   console.log('działa');
  // }
  addMovie(): void {
    this.movies.unshift(this.movie);
    this.movie = { id: '', type: 'youtube | vimeo' };
    console.log(this.movie);
  }
}
