import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TahunKalenderPage } from './tahun-kalender.page';

const routes: Routes = [
  {
    path: '',
    component: TahunKalenderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TahunKalenderPage]
})
export class TahunKalenderPageModule {}
