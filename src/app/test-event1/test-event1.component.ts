import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-event1',
  templateUrl: './test-event1.component.html',
  styleUrls: ['./test-event1.component.css']
})
export class TestEvent1Component implements OnInit {

  count = 0;

  constructor() { }

  onClick() {
    this.count++;
  }

  ngOnInit() {
  }

}