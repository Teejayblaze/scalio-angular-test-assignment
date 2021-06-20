import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Users } from './models/users';

@Injectable()
export class GithubService {
  URL: string = 'https://api.github.com/search/users';
  constructor(private http: HttpClient) {}

  doGetServices(q: string) {
    this.URL = encodeURI(this.URL + `?q=${q} in:login`);
    return this.http
      .get(this.URL)
      .pipe(map(res => res['items'].map((user: Users) => new Users(user))));
  }
}
