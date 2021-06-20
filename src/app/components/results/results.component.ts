import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  ordIdx: string = 'login';
  reverse: boolean = false;
  @Input() users;
  page: number = 1;
  itemPerPage: number = 9;

  constructor() {}

  ngOnInit() {}

  sort(key: string = null) {
    this.ordIdx = key;
    this.reverse = !this.reverse;
  }
}
