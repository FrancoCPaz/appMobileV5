import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'restaurar',
    loadChildren: () => import('./pages/restaurar/restaurar.module').then( m => m.RestaurarPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'tareas',
    loadChildren: () => import('./pages/tareas/tareas.module').then( m => m.TareasPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./pages/inventario/inventario.module').then( m => m.InventarioPageModule)
  },

  //rediccionamiento a pag error si no se encuentra la ruta
  {
    path: '**',
    loadChildren: () => import('./pages/error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: 'tareas',
    loadChildren: () => import('./pages/tareas/tareas.module').then( m => m.TareasPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./pages/inventario/inventario.module').then( m => m.InventarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
