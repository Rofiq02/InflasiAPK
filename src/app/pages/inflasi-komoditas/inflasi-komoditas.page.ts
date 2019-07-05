import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { NavController, NavParams } from '@ionic/angular';
import { Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-inflasi-komoditas',
  templateUrl: './inflasi-komoditas.page.html',
  styleUrls: ['./inflasi-komoditas.page.scss'],
})
export class InflasiKomoditasPage implements OnInit {

  path : any;
  inflasi_item : any;
  inflasi_komoditas : any;
  kd_bulan : any;
  tahun : any;
  id : any;
  monthNames : any;
  tahunn:any=[];
  cek: boolean = false;

  constructor(
    public router: Router,
    private http : HttpClient,
    //public navParams: NavParams,
    ) { 
      this.path = localStorage.getItem('path');
      //this.kd_bulan = this.navParams.get("inflasi_komoditas");
      //this.tahun = this.navParams.get("inflasi_komoditas");
      this.monthNames = ['1','2','3','4','5','6','7','8','9','10','11','12'];
      this.kd_bulan = this.monthNames[(new Date()).getMonth()];
      this.tahun = new Date().getFullYear().toString()
      for(let i = 2019; i<=parseInt(this.tahun); i++){
        this.tahunn.push(i);
      }

      console.log("lala",this.tahunn)
      this.loadKomoditas();
    }


    async loadKomoditas(){
      let data : Observable<any>;
      console.log(this.kd_bulan);
      console.log(this.tahun);
      data = await this.http.get(this.path+'/mobile/get_inflasi_komoditas/'+this.kd_bulan+'/'+this.tahun);
      data.subscribe(res => {
        this.inflasi_komoditas = res;
        console.log(res.length)
        res.length > 0 ? this.cek=true : this.cek=false;
       });    
    }

  ngOnInit() {
  }

}
