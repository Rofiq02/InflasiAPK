import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, LoadingController, NavParams } from '@ionic/angular';
import { Observable, of, throwError } from 'rxjs';


@Component({
  selector: 'app-inflasi-terkini',
  templateUrl: './inflasi-terkini.page.html',
  styleUrls: ['./inflasi-terkini.page.scss'],
})
export class InflasiTerkiniPage implements OnInit {

  path: any;
  terkini: any;

  ngOnInit(): void {
    
  }


  constructor(
    public router: Router,
    private http : HttpClient,
    public load: LoadingController, 
  ) { 
    this.path = localStorage.getItem('path');
    this.loadTerkini();
  }

  async loadTerkini(){
    let data : Observable<any>;
    data = await this.http.get(this.path+'/mobile/get_inflasi_terkini');
      let loading = await this.load.create({
        //message: "Tunggu sebentar..",
        spinner: "bubbles",
        cssClass: 'loading-wrapper',
      });
    loading.present();
    data.subscribe(res =>{
      loading.dismiss();
      this.terkini = res;
    });
  }

  viewTahun(tk){
    this.router.navigateByUrl('/menu/kalenderchart');
  }

  viewYoy(yo){
    this.router.navigateByUrl('/menu/yo-y');
  }

  viewPengeluaran(peng){
    this.router.navigateByUrl('/menu/pengeluaranchart');
  }

  viewKomoditas(komo){
    this.router.navigateByUrl('/menu/inflasi-komoditas');
  }

}
