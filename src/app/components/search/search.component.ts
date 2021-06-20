import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();
  q: string;

  constructor() {}

  ngOnInit() {}

  searchUser() {
    if (this.q && this.q.length > 0) this.emitter.emit(this.q);
  }
}
