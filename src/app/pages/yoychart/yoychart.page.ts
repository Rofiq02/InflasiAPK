import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, LoadingController, NavParams } from '@ionic/angular';
import { Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-yoychart',
  templateUrl: './yoychart.page.html',
  styleUrls: ['./yoychart.page.scss'],
})
export class YoychartPage implements OnInit {

  path : any;
  yoylimit : any;

  constructor(
    public router: Router,
    private http : HttpClient,
    public load: LoadingController,
  ) { 
    this.path = localStorage.getItem('path');
    this.loadYoYLimit();
  }

  async loadYoYLimit(){
    let data : Observable<any>;
    data = await this.http.get(this.path+'/mobile/get_yoy_limit');
      let loading = await this.load.create({
        //message: "Tunggu sebentar..",
        spinner: "bubbles",
        cssClass: 'loading-wrapper',
      });
      loading.present();
    data.subscribe(res =>{
      loading.dismiss();
      this.yoylimit = res;
    });
  }

  goToTestPage() {
    this.router.navigateByUrl('/menu/yo-y');
}

  ngOnInit() {
  }

}
