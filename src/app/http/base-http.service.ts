import { newMovie } from './http.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer, Subject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  behaviorSubject = new BehaviorSubject<newMovie[]>([]);
  subject = new Subject<newMovie[]>();

  constructor(private httpService: HttpService) {
    this.init();
  }

  // tslint:disable-next-line: typedef
  addMovie(movie: newMovie) {
    this.httpService.addMovie(movie).subscribe(this.observer());
  }

  private init(): void {
    this.httpService.fetchMovie().subscribe(this.observer());
  }
  private observer(): Observer<newMovie[]> {
    return {
      next: (movies: newMovie[]) => {
        this.behaviorSubject.next(movies);
        this.subject.next(movies);
      },
      error: error => console.error(error),
      complete: () => console.log('Complete!')
    };
  }
}
