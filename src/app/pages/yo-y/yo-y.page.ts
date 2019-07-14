import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { NavController, LoadingController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-yo-y',
  templateUrl: './yo-y.page.html',
  styleUrls: ['./yo-y.page.scss'],
})
export class YoYPage implements OnInit {

  path : any;
  yoy : any;
  tahun : any;
  tahunan:any=[];
  cek: boolean = false;
  yoysekarang : any;
  cekin : boolean = false;

  constructor(
    public router: Router,
    private http : HttpClient,
    public load: LoadingController,
    ) { 
      this.path = localStorage.getItem('path');
      this.tahun = new Date().getFullYear().toString()
      for(let i = 2013; i<=parseInt(this.tahun); i++){
        this.tahunan.push(i);
      }
      this.loadYoY();
      this.loadYoYSekarang();
    }

    async loadYoY(){
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/get_inflasi_yoy/'+this.tahun);
        let loading = await this.load.create({
          //message: "Tunggu sebentar..",
          spinner: "bubbles",
          cssClass: 'loading-wrapper',
        });
      loading.present();
      data.subscribe(res =>{
        loading.dismiss();
        this.yoy = res;
        res.length > 0 ? this.cek=true : this.cek=false;
      });
    }

    async loadYoYSekarang(){
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/get_yoy_sekarang');
      data.subscribe(res =>{
        this.yoysekarang = res;
      });
    }

    viewSekarang(tk){
      this.cekin ? this.cekin= false : this.cekin = true
    }

  ngOnInit() {
  }

}
