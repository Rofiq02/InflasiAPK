import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';
import { NavController, LoadingController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-bulanan',
  templateUrl: './bulanan.page.html',
  styleUrls: ['./bulanan.page.scss'],
})
export class BulananPage implements OnInit {

  path : any;
  bulanan : any;
  tahuna : any;
  tahunan:any=[];
  cek: boolean = false;

  constructor(
    public router: Router,
    private http : HttpClient,
    public load: LoadingController, 
    ) { 
      this.path = localStorage.getItem('path');
      this.tahuna = new Date().getFullYear().toString()
      for(let i = 2013; i<=parseInt(this.tahuna); i++){
        this.tahunan.push(i);
      }
      this.loadBulanan();
    }

  
  async loadBulanan(){
    let data : Observable<any>;
    data = await this.http.get(this.path+'/mobile/get_bulanan/'+this.tahuna);
    let loading = await this.load.create({
      //message: "Tunggu sebentar..",
      spinner: "bubbles",
      cssClass: 'loading-wrapper',
    });
    loading.present();
    data.subscribe(res =>{
      loading.dismiss();
      this.bulanan = res;
      res.length > 0 ? this.cek=true : this.cek=false;
    });
  }

  

  ngOnInit() {
  }

}
