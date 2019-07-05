import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PengeluaranPage } from './pengeluaran.page';

const routes: Routes = [
  {
    path: '',
    component: PengeluaranPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PengeluaranPage]
})
export class PengeluaranPageModule {}
