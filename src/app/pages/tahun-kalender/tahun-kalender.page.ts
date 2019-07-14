import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { NavController, LoadingController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tahun-kalender',
  templateUrl: './tahun-kalender.page.html',
  styleUrls: ['./tahun-kalender.page.scss'],
})
export class TahunKalenderPage implements OnInit {

  path : any;
  kalender : any;
  kalenderterkini : any;
  cekin : boolean=false;

  

  constructor(
    public router: Router,
    private http : HttpClient,
    public load: LoadingController, 
    ) { 
      this.path = localStorage.getItem('path');
      this.loadKalenderTerkini();
      this.loadKalender();
    }

    async loadKalenderTerkini(){
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/get_kalender_terkini');
      data.subscribe(res =>{
        this.kalenderterkini = res;
      });
    }

    async loadKalender(){
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/limit_kalender');
      let loading = await this.load.create({
        //message: "Tunggu sebentar..",
        spinner: "bubbles",
        cssClass: 'loading-wrapper',
      });
      loading.present();
      data.subscribe(res =>{
        loading.dismiss();
        this.kalender = res;
      });
    }
  


  goToTestPage() {
    this.router.navigateByUrl('/menu/kalenderchart');
}

viewSekarang(tk){
  this.cekin ? this.cekin= false : this.cekin = true
}

  ngOnInit() {
  }

}
