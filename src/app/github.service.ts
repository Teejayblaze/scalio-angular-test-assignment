import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/dist/types/operators';
import { Users } from './models/users';

@Injectable()
export class GithubService {
  URL: string = 'https://api.github.com/search/users';
  constructor(private http: HttpClient) {}

  doGetServices(q: string): Observable<Users[]> {
    this.URL = encodeURI(this.URL + `?q=${q} in:login`);
    return this.http
      .get<Users[]>(this.URL)
      .pipe(map(value => new Users(value)));
  }
}
