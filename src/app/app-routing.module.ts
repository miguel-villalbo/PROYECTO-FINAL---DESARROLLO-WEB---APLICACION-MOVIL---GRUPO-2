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
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'sinrecetapi',
    loadChildren: () => import('./sinrecetapi/sinrecetapi.module').then( m => m.SinrecetapiPageModule)
  },
  {
    path: 'perfiles/:id',
    loadChildren: () => import('./perfiles/perfiles.module').then( m => m.PerfilesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
