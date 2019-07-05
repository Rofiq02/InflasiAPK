import { Component, ViewChild } from '@angular/core';

import { Platform, Events, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';

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
    public serviceprofile: ProfileService

  ) {
    this.initializeApp();
    this.events.subscribe("prof",(data)=>{
      this.profile = JSON.parse(data);
      console.log(this.profile)
    });

    // Set Path Global
   localStorage.setItem('path','http://localhost/inflasi/public/api');

   if(localStorage.getItem("profile") === null)
   {
    serviceprofile.login = false
   } else 
   {
     serviceprofile.login = true
      this.profile = JSON.parse(localStorage.getItem("profile"))
      serviceprofile.detail = this.profile
   }

}


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
