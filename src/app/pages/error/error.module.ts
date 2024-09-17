import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorPageRoutingModule } from './error-routing.module';

import { ErrorPage } from './error.page';
import { defineCustomElements } from '@teamhive/lottie-player/loader';

defineCustomElements(window);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorPageRoutingModule
  ],
  declarations: [ErrorPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ErrorPageModule {}
