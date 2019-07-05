import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PengeluaranchartPage } from './pengeluaranchart.page';

const routes: Routes = [
  {
    path: '',
    component: PengeluaranchartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PengeluaranchartPage]
})
export class PengeluaranchartPageModule {}
