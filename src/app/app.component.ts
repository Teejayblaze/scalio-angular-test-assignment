import { Component, OnInit, VERSION } from '@angular/core';
import { GithubService } from './github.service';
import { Users } from './models/users';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: Array<Users> = [];
  constructor(private github: GithubService) {}

  ngOnInit() {}
  getEmittedValue(value) {
    if (value && value.length > 0) {
      this.github.doGetServices(value).subscribe((users: Array<Users>) => {
        this.users = users;
      });
    }
  }
}
