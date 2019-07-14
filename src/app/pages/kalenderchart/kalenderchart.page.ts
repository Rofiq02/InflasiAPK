import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, LoadingController, NavParams } from '@ionic/angular';
import { Observable, of, throwError } from 'rxjs';


@Component({
  selector: 'app-kalenderchart',
  templateUrl: './kalenderchart.page.html',
  styleUrls: ['./kalenderchart.page.scss'],
})
export class KalenderchartPage implements OnInit {

  path: any;
  kalenderskrg : any;
  kalenderkmrn : any;
  kalenderkmrnlgi : any;
  kalender : any;
  tahun : any;
  tahunan :any=[];
  cek : boolean = false;

  constructor(
    public router: Router,
    private http : HttpClient,
    public load: LoadingController, 
    ) { 
      this.path = localStorage.getItem('path');
      this.tahun = new Date().getFullYear().toString()
      for(let i = 2017; i<=parseInt(this.tahun); i++){
        this.tahunan.push(i);
      }
      this.loadKalender();
    }

    async loadKalender(){
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/get_kalender/'+this.tahun);
      let loading = await this.load.create({
        //message: "Tunggu sebentar..",
        spinner: "bubbles",
        cssClass: 'loading-wrapper',
      });
      loading.present();
      data.subscribe(res =>{
          loading.dismiss();
        this.kalender = res;
        res.length > 0 ? this.cek=true : this.cek=false;
      });
    }


  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }


  ngOnInit() {
  }

}
