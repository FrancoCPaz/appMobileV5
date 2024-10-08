import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurarPageRoutingModule } from './restaurar-routing.module';

import { RestaurarPage } from './restaurar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RestaurarPage]
})
export class RestaurarPageModule {}
