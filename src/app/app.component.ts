import { BaseHttpService } from './http/base-http.service';
import { Movies } from './http/http.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'videoApp';
  movies: Movies = { link: '' };
  constructor(private baseHttpService: BaseHttpService) { }

  add(): void {
    this.baseHttpService.addMovie(this.movies);
    // console.log('działa');
  }
}
