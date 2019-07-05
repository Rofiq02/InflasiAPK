import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KalenderchartPage } from './kalenderchart.page';

const routes: Routes = [
  {
    path: '',
    component: KalenderchartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KalenderchartPage]
})
export class KalenderchartPageModule {}
