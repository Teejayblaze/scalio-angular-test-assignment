import { error } from '@angular/compiler/src/util';
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
  isProcessing: boolean = false;
  isEmpty: boolean = false;
  constructor(private github: GithubService) {}

  ngOnInit() {}
  getEmittedValue(value) {
    this.users = [];
    this.isEmpty = false;
    this.isProcessing = false;
    if (value && value.length > 0) {
      this.isProcessing = true;
      console.log('this.isProcessing =', this.isProcessing);
      this.github.doGetServices(value).subscribe(
        (users: Array<Users>) => {
          this.users = users;
          if (!this.users.length) this.isEmpty = true;
          this.isProcessing = false;
        },
        error => {
          this.isEmpty = true;
        }
      );
    }
  }
}
