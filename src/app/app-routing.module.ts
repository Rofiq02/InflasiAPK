import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/menu/login', 
    pathMatch: 'full' 
  },
  {
    path: 'menu',
    loadChildren: './pages/menu/menu.module#MenuPageModule'
  },
  
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'dataseries', loadChildren: './pages/dataseries/dataseries.module#DataseriesPageModule' },
  { path: 'bulanan', loadChildren: './pages/bulanan/bulanan.module#BulananPageModule' },
  { path: 'yo-y', loadChildren: './pages/yo-y/yo-y.module#YoYPageModule' },
  { path: 'pengeluaran', loadChildren: './pages/pengeluaran/pengeluaran.module#PengeluaranPageModule' },
  { path: 'komoditas', loadChildren: './pages/komoditas/komoditas.module#KomoditasPageModule' },
  { path: 'inflasi-komoditas', loadChildren: './pages/inflasi-komoditas/inflasi-komoditas.module#InflasiKomoditasPageModule' },
  { path: 'inflasi-pengeluaran', loadChildren: './pages/inflasi-pengeluaran/inflasi-pengeluaran.module#InflasiPengeluaranPageModule' },
  { path: 'inflasi-terkini', loadChildren: './pages/inflasi-terkini/inflasi-terkini.module#InflasiTerkiniPageModule' },
  { path: 'kelompok-pengeluaran', loadChildren: './pages/kelompok-pengeluaran/kelompok-pengeluaran.module#KelompokPengeluaranPageModule' },
  { path: 'tahun-kalender', loadChildren: './pages/tahun-kalender/tahun-kalender.module#TahunKalenderPageModule' },
  { path: 'akun', loadChildren: './pages/akun/akun.module#AkunPageModule' },
  { path: 'tentang', loadChildren: './pages/tentang/tentang.module#TentangPageModule' },
  { path: 'bulananchart', loadChildren: './pages/bulananchart/bulananchart.module#BulananchartPageModule' },
  { path: 'kalenderchart', loadChildren: './pages/kalenderchart/kalenderchart.module#KalenderchartPageModule' },
  { path: 'yoychart', loadChildren: './pages/yoychart/yoychart.module#YoychartPageModule' },
  { path: 'pengeluaranchart', loadChildren: './pages/pengeluaranchart/pengeluaranchart.module#PengeluaranchartPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
