import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/menu/inflasi-terkini',
    pathMatch:'full'
  },
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'inflasi-terkini',
        loadChildren: '../inflasi-terkini/inflasi-terkini.module#InflasiTerkiniPageModule'
      },
      {
        path: 'bulananchart',
        loadChildren: '../bulananchart/bulananchart.module#BulananchartPageModule'
      },
      {
        path: 'yoychart',
        loadChildren: '../yoychart/yoychart.module#YoychartPageModule'
      },
      {
        path: 'tahun-kalender',
        loadChildren: '../tahun-kalender/tahun-kalender.module#TahunKalenderPageModule'
      },
      {
        path: 'pengeluaran',
        loadChildren: '../pengeluaran/pengeluaran.module#PengeluaranPageModule'
      },
      {
        path: 'inflasi-pengeluaran',
        loadChildren: '../inflasi-pengeluaran/inflasi-pengeluaran.module#InflasiPengeluaranPageModule'
      },
      {
        path: 'komoditas',
        loadChildren: '../komoditas/komoditas.module#KomoditasPageModule'
      },
      {
        path: 'inflasi-komoditas',
        loadChildren: '../inflasi-komoditas/inflasi-komoditas.module#InflasiKomoditasPageModule'
      },
      {
        path: 'akun',
        loadChildren: '../akun/akun.module#AkunPageModule'
      },
      {
        path: 'tentang',
        loadChildren: '../tentang/tentang.module#TentangPageModule'
      },
      { 
        path: 'login',
        loadChildren: '../login/login.module#LoginPageModule' 
      },
      {
        path: 'kalenderchart',
        loadChildren: '../kalenderchart/kalenderchart.module#KalenderchartPageModule'
      },
      {
        path: 'pengeluaranchart',
        loadChildren: '../pengeluaranchart/pengeluaranchart.module#PengeluaranchartPageModule'
      },
      {
        path: 'yo-y',
        loadChildren: '../yo-y/yo-y.module#YoYPageModule'
      },
      {
        path: 'bulanan',
        loadChildren: '../bulanan/bulanan.module#BulananPageModule'
      },
      {
        path: 'register',
        loadChildren: '../register/register.module#RegisterPageModule'
      }
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
