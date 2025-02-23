import { Component } from '@angular/core';
import { MovieComponent } from './movie/movie.component';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Important for standalone apps
  imports: [MovieComponent],
  template: `<app-movie></app-movie>`
})
export class AppComponent {}
