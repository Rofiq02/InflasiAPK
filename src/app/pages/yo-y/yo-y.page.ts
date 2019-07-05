import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

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

  constructor(
    public router: Router,
    private http : HttpClient
    ) { 
      this.path = localStorage.getItem('path');
      this.tahun = new Date().getFullYear().toString()
      for(let i = 2013; i<=parseInt(this.tahun); i++){
        this.tahunan.push(i);
      }
      this.loadYoY();
    }

    async loadYoY(){
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/get_inflasi_yoy/'+this.tahun);
      data.subscribe(res =>{
        this.yoy = res;
        res.length > 0 ? this.cek=true : this.cek=false;
      });
    }

  ngOnInit() {
  }

}
