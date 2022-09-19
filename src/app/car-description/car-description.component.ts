import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-description',
  templateUrl: './car-description.component.html',
  styleUrls: ['./car-description.component.css'],
})
export class CarDescriptionComponent implements OnInit {
  car = {
    model: 'Alfa Romeo Giulia',
    img: 'assets/images/Alfa_Romeo_Giulia_Super.jpg',
    available: false,
  };

  constructor() {
    setTimeout(() => {
      this.car.model = 'Nuova ' + this.car.model;
      this.car.img = 'assets/images/alfa-romeo-giulia-new.jpg';
      this.car.available = true;
    }, 3000);
  }

  ngOnInit() {}
}
