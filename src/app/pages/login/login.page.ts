import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController, Events, } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { ProfileService } from "./../../services/profile.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  frmLogin : NgForm;
  valid : any = 1;
  mess : any;
  path: any;
  email:any;
  password:any;
  user: any=[];
  validasi: boolean=false;

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    public http: HttpClient,
    public loading: LoadingController, 
    public events : Events,
    public profile : ProfileService,
    public router: Router,
  ) { 
    this.path = localStorage.getItem("path");
  }
  ngOnInit() {
  }
  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }
  // On Register button tap, dismiss login modal and open register modal
  async registerModal() {
    this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }
  async login() {
    this.validasi = true;
    // if(this.email !=0 && this.password !=0){

      // mengambil data form Reg
      let data =new FormData();
        data.append("email",this.email);
        data.append("password",this.password);
  
      let headers : any = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('content-Type', 'application/json');
  
      let url : any = this.path+'/mobile/login';
      
      
      await this.http.post(url, data, headers)
      .subscribe((res : any) =>
        {
          
  
          // melakukan cek berhasil atau tidak saat registrasi
          if(res.type=="success"){


          this.events.publish("prof",JSON.stringify(res.profile));
          localStorage.setItem("profile",JSON.stringify(res.profile)); 

          this.profile.login = true
          this.profile.detail = res.profile


            this.navCtrl.navigateRoot('/menu/inflasi-terkini');
          } 
          else if(res.type=="error pass"){
            this.password = ""
          } else if(res.type=="error email"){
            this.email = ""
          }
          else{
            //error semua
          }
        },
        (error : any) =>
        {
          console.log(error);
          console.log('Something went wrong!');
        });
    //  }
    //  else{
    //   this.email !=0 && this.password !=0;
    // }
  }

  goToTestPage() {
    this.router.navigateByUrl('/register');
  }
}