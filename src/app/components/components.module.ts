import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  declarations: [
    MenuComponent,
    TabsComponent,
    HeaderComponent,
    CustomInputComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports:[
    MenuComponent,
    TabsComponent,
    HeaderComponent,
    CustomInputComponent,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
