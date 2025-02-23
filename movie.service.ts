import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'f13d9a0';
  private apiUrl = `https://www.omdbapi.com/?apikey=${this.apiKey}&`;

  constructor(private http: HttpClient) {}

  searchMovie(title: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}s=${title}`);
  }
}
