import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  private _eur = 0;
  usd = 0;
  conversionRate = 1.1498;

  constructor() { }

  ngOnInit() {
  }

  get eur(): number {
    return this._eur;
  }

  set eur(value: number) {
    this._eur = value;
    this.usd = this._eur * this.conversionRate;
  }

  updateEUR(increment: number) {
    this.eur += increment;
  }

}