import { Movie } from '../interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer, Subject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  behaviorSubject = new BehaviorSubject<Movie[]>([]);
  subject = new Subject<Movie[]>();

  constructor(private httpService: HttpService) {
    // this.init();
  }

  // tslint:disable-next-line: typedef
  // addMovie(movie: Movie) {
  //   this.httpService.addMovie(movie).subscribe(this.observer());
  // }

  // private init(): void {
  //   this.httpService.fetchMovie().subscribe(this.observer());
  // }
  private observer(): Observer<Movie[]> {
    return {
      next: (movies: Movie[]) => {
        this.behaviorSubject.next(movies);
        this.subject.next(movies);
      },
      error: error => console.error(error),
      complete: () => console.log('Complete!')
    };
  }
}
