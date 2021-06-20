import { Component, OnInit, VERSION } from '@angular/core';
import { GithubService } from './github.service';
import { Users } from './models/users';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ordIdx: string = 'login';
  reverse: boolean = false;
  users: Array<Users> = [];
  page: number = 1;
  itemPerPage: number = 9;

  constructor(private github: GithubService) {}

  ngOnInit() {
    this.github.doGetServices('foo').subscribe((users: Array<Users>) => {
      this.users = users;
      console.log(this.users);
    });
  }

  name = 'Angular ' + VERSION.major;

  sort(key: string = null) {
    this.ordIdx = key;
    this.reverse = !this.reverse;
  }
}
