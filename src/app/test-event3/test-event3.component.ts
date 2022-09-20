import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-event3',
  templateUrl: './test-event3.component.html',
  styleUrls: ['./test-event3.component.css']
})
export class TestEvent3Component implements OnInit {

  eur = 0;
  usd = 0;
  conversionRate = 1.1498;

  constructor() { }

  ngOnInit() {
  }
  /**
   * modalita di passaggio dato tramite evento
   * come combinazione di event binding e property binding 
   */
  onInput(event:any) {
    this.eur = event.target.value;
    this.usd = this.eur * this.conversionRate;
  }

  /**
   * Modalità di passaggio to-way data binding, tramite la
   * direttiva ngModel 
   */
  update(value:any) {
    this.eur = +value || 0;
    this.usd = this.eur * this.conversionRate;
  }

}