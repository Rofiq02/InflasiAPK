import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InflasiKomoditasPage } from './inflasi-komoditas.page';

const routes: Routes = [
  {
    path: '',
    component: InflasiKomoditasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InflasiKomoditasPage]
})
export class InflasiKomoditasPageModule {}
