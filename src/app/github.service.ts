import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Users } from './models/users';

@Injectable()
export class GithubService {
  private URL: string = 'https://api.github.com/search/users';
  constructor(private http: HttpClient) {}

  doGetServices(q: string) {
    const url = encodeURI(this.URL + `?q=${q} in:login`);
    console.log(url);
    return this.http
      .get(url)
      .pipe(map(res => res['items'].map((user: Users) => new Users(user))));
  }
}
