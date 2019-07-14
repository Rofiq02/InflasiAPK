import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { NavController, LoadingController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-bulananchart',
  templateUrl: './bulananchart.page.html',
  styleUrls: ['./bulananchart.page.scss'],
})
export class BulananchartPage implements OnInit {

  path : any;
  inflasikemarin : any;
  terkini : any;
  cek : boolean = false;
  cekin : boolean = false;

  constructor(
    public router: Router,
    private http : HttpClient,
    public load: LoadingController, 
    ) { 
      this.path = localStorage.getItem('path');
      this.loadData()
    }

    async loadData(){
      
      
      this.loadInflasikemarin()
      this.loadTerkini()
        // console.log('a')
    }

    async loadInflasikemarin(){
      let loading = await this.load.create({
        //message: "Tunggu sebentar..",
        spinner: "bubbles",
        cssClass: 'loading-wrapper',
      });
      loading.present();
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/get_inflasi_kemarin');
      
      data.subscribe(res =>{
        this.inflasikemarin = res;
        loading.dismiss();
      });
    }

    async loadTerkini(){
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/get_inflasi_terkini');
      data.subscribe(res =>{
        this.terkini = res;
      });
    }

    goToTestPage() {
      this.router.navigateByUrl('/menu/bulanan');
  }

  viewKeterangan(tk){
    this.cek ? this.cek= false : this.cek = true
  }

  viewSekarang(tk){
    this.cekin ? this.cekin= false : this.cekin = true
  }

  async doRefresh(event) {
    // setTimeout(() => {
    //   console.log('Async operation has ended');
    window.location.reload()
      event.target.complete();
    // }, 2000);
  }

  ngOnInit() {
  }

}
