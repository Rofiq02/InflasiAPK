import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { NavController, NavParams } from '@ionic/angular';
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
    private http : HttpClient
  ) { 
    this.path = localStorage.getItem('path');
    this.loadYoYLimit();
  }

  async loadYoYLimit(){
    let data : Observable<any>;
    data = await this.http.get(this.path+'/mobile/get_yoy_limit');
    data.subscribe(res =>{
      this.yoylimit = res;
    });
  }

  goToTestPage() {
    this.router.navigateByUrl('/menu/yo-y');
}

  ngOnInit() {
  }

}
