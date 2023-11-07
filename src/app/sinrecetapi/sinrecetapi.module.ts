import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinrecetapiPageRoutingModule } from './sinrecetapi-routing.module';

import { SinrecetapiPage } from './sinrecetapi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinrecetapiPageRoutingModule
  ],
  declarations: [SinrecetapiPage]
})
export class SinrecetapiPageModule {}
