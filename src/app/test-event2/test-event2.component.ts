import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-event2',
  templateUrl: './test-event2.component.html',
  styleUrls: ['./test-event2.component.css']
})
export class TestEvent2Component implements OnInit {

  coord = {
    x: 0,
    y: 0
  };
  constructor() { }

  ngOnInit() {
  }

  onMouseMove(event:any) {
    this.coord.x = event.offsetX;
    this.coord.y = event.offsetY;
  }

}