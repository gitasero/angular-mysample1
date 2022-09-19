import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-string',
  templateUrl: './test-string.component.html',
  styleUrls: ['./test-string.component.css']
})
export class TestStringComponent implements OnInit {

  title = 'my-angular-app';

  getTitle(): string {
    return this.title;
  }

  constructor() { }

  ngOnInit() {
  }

}