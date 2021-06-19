import { Component, OnInit, VERSION } from '@angular/core';
import { GithubService } from './github.service';
import { Users } from './models/users';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  key: string = 'avatar_url';
  reverse: boolean = false;
  users: Array<Users> = [];

  constructor(private github: GithubService) {}

  ngOnInit() {
    this.github.doGetServices('foo').subscribe(response => {
      this.users = response['items'];
      console.log(this.users);
    });
  }

  name = 'Angular ' + VERSION.major;

  sort(key: string = null) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
