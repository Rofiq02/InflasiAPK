import { Component, ViewChild } from '@angular/core';

import { Platform, Events, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { Router, Routes } from '@angular/router';

//Notifikasi
import { FCM } from '@ionic-native/fcm/ngx';

import { ProfileService } from "./services/profile.service";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild(NavController) NavController: NavController;

  //rootPage: any = LoginPage;
  profile : any = "";
  

  public appPages = [

  ];

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public events : Events,
    public serviceprofile: ProfileService,
    private fcm: FCM,
    private router: Router

  ) {
    this.initializeApp();
    this.fcm.getToken().then(token => {
      console.log(token);
    });

    //untuk refresh token
    this.fcm.onTokenRefresh().subscribe(token => {
      console.log(token);
    });

    //untuk menerima push notifikasi
    this.fcm.onNotification().subscribe(data => {
      console.log(data);
      if (data.wasTapped) {
        console.log('Received in background');
        this.router.navigate([data.landing_page, data.price]);
      } else {
        console.log('Received in foreground');
        this.router.navigate([data.landing_page, data.price]);
      }
    });


    this.events.subscribe("prof",(data)=>{
      this.profile = JSON.parse(data);
      console.log(this.profile)
    });

    // Set Path Global
   localStorage.setItem('path','http://localhost/inflasi/public/api');

  //  localStorage.setItem('path','https://bpsinflasi.000webhostapp.com/');

   if(localStorage.getItem("profile") === null)
   {
    serviceprofile.login = false
    this.router.navigateByUrl('/menu/login');
   } else 
   {
     serviceprofile.login = true
      this.profile = JSON.parse(localStorage.getItem("profile"))
      serviceprofile.detail = this.profile
      this.router.navigateByUrl('/menu/inflasi-terkini');
   }

}


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
