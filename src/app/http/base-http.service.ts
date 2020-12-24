import { Movies } from './http.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer, Subject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  behaviorSubject = new BehaviorSubject<Movies[]>([]);
  subject = new Subject<Movies[]>();

  constructor(private httpService: HttpService) {
    this.init();
  }
  // tslint:disable-next-line: typedef
  addMovie(movies: Movies) {
    this.httpService.addMovie(movies).subscribe(this.observer());
  }

  private init(): void {
    this.httpService.fetchMovies().subscribe(this.observer());
  }
  private observer(): Observer<Movies[]> {
    return {
      next: (persons: Movies[]) => {
        this.behaviorSubject.next(persons);
        this.subject.next(persons);
      },
      error: error => console.error(error),
      complete: () => console.log('Complete!')
    };
  }
}
