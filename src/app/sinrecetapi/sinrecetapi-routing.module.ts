import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinrecetapiPage } from './sinrecetapi.page';

const routes: Routes = [
  {
    path: '',
    component: SinrecetapiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinrecetapiPageRoutingModule {}
