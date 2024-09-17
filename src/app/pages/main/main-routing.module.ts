import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

import { MenuComponent } from 'src/app/components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    //declaro los componentes que voy a trabajar 
    children:[
      {
        path: 'menu', component: MenuComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
