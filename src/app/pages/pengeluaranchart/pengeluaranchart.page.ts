import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { NavController, LoadingController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pengeluaranchart',
  templateUrl: './pengeluaranchart.page.html',
  styleUrls: ['./pengeluaranchart.page.scss'],
})
export class PengeluaranchartPage implements OnInit {

  path : any;
  kategori : any;
  tahun : any;
  tahunan : any=[];
  cek : boolean = false;

  constructor(
    public router: Router,
    private http : HttpClient,
    public load: LoadingController, 
    ) { 
      this.path = localStorage.getItem('path');
      this.tahun = new Date().getFullYear().toString()
      for(let i = 2019; i<=parseInt(this.tahun); i++){
        this.tahunan.push(i);
      }
      this.loadKategori();
    }

    async loadKategori(){
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/get_kategori/'+this.tahun);
        let loading = await this.load.create({
          //message: "Tunggu sebentar..",
          spinner: "bubbles",
          cssClass: 'loading-wrapper',
        });
        loading.present();
      data.subscribe(res =>{
        loading.dismiss();
        this.kategori = res;
        res.length > 0 ? this.cek=true : this.cek=false;
      });
    }
  

  ngOnInit() {
  }

}
