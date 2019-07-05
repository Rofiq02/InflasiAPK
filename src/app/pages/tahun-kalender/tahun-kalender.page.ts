import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-tahun-kalender',
  templateUrl: './tahun-kalender.page.html',
  styleUrls: ['./tahun-kalender.page.scss'],
})
export class TahunKalenderPage implements OnInit {

  path : any;
  kalender : any;
  kalenderterkini : any;

  

  constructor(
    public router: Router,
    private http : HttpClient
    ) { 
      this.path = localStorage.getItem('path');
      this.loadKalenderTerkini();
      this.loadKalender();
    }

    async loadKalenderTerkini(){
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/get_kalender_terkini');
      data.subscribe(res =>{
        this.kalenderterkini = res;
      });
    }

    async loadKalender(){
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/limit_kalender');
      data.subscribe(res =>{
        this.kalender = res;
      });
    }
  


  goToTestPage() {
    this.router.navigateByUrl('/menu/kalenderchart');
}

  ngOnInit() {
  }

}
