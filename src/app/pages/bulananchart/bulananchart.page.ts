import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';


@Component({
  selector: 'app-bulananchart',
  templateUrl: './bulananchart.page.html',
  styleUrls: ['./bulananchart.page.scss'],
})
export class BulananchartPage implements OnInit {

  path : any;
  inflasikemarin : any;
  terkini : any;

  constructor(
    public router: Router,
    private http : HttpClient
    ) { 
      this.path = localStorage.getItem('path');
      
      this.loadInflasikemarin();
      this.loadTerkini();
    }

    async loadInflasikemarin(){
      let data : Observable<any>;
      data = await this.http.get(this.path+'/mobile/get_inflasi_kemarin');
      data.subscribe(res =>{
        this.inflasikemarin = res;
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

  ngOnInit() {
  }

}
