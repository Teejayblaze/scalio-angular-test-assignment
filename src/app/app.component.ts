import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  key: string = 'avatar_url';
  reverse: boolean = false;

  name = 'Angular ' + VERSION.major;

  sort(key: string = null) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
