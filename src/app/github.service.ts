import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './models/users';

@Injectable()
export class GithubService {
  private URL: string = 'https://api.github.com/search/users';
  constructor(private http: HttpClient) {}

  doGetServices(q: string) {
    return this.http.get<Users[]>(URL + `?q=${q} in:login`);
  }
}
