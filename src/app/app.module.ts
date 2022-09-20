import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TestStringComponent } from './test-string/test-string.component';
import { CarDescriptionComponent } from './car-description/car-description.component';
import { TestEvent1Component } from './test-event1/test-event1.component';
import { TestEvent2Component } from './test-event2/test-event2.component';
import { TestEvent3Component } from './test-event3/test-event3.component';
import { ConversionComponent } from './conversion/conversion.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ConversionComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    TestStringComponent,
    CarDescriptionComponent,
    TestEvent3Component,
    ConversionComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/