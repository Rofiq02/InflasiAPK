import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-inflasi-pengeluaran',
  templateUrl: './inflasi-pengeluaran.page.html',
  styleUrls: ['./inflasi-pengeluaran.page.scss'],
})
export class InflasiPengeluaranPage implements OnInit {

  path : any;
  inflasi_kategori : any;
  kategorisekarang : any;

  constructor(
    public router: Router,
    private http : HttpClient
    ) { 
      this.path = localStorage.getItem('path');
      this.loadKategori();
      this.loadKategoriSekarang();
    }

    async loadKategori(){
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/get_inflasi_kategori');
      data.subscribe(res =>{
        this.inflasi_kategori = res;
      });
    }

    async loadKategoriSekarang(){
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/get_kategori_sekarang');
      data.subscribe(res =>{
        this.kategorisekarang = res;
      });
    }

    goToTestPage() {
      this.router.navigateByUrl('/menu/pengeluaranchart');
  }

  ngOnInit() {
  }

}
