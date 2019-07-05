import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, LoadingController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { NgForm,Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  frmReg : NgForm;
  path : any;
  name: any;
  alamat:any;
  telp:any;
  email:any;
  password:any;
  user: any=[];
  validasi: boolean=false;


  constructor(
    private modalController: ModalController,
    public navCtrl: NavController, 
    public http: HttpClient, 
    public FB : FormBuilder, 
    public loading : LoadingController) {
      this.path = localStorage.getItem("path");
  }


  async register(){
    this.validasi= true;
    // console.log(this.name);
    //console.log(this.users);
    if(!this.user){
      //alert('input wajib di isi')
      return;
    }
    if(!this.user.name)
    {
      // alert('nama di isi')
      return;
    }
    if(!this.user.alamat)
    {
      // alert('alamat di isi')
      return;
    }
    // if(!this.user.telp){
    //   return;
    // }
    if(!this.user.email){
      return;
    }
    if(!this.user.password){
      return;
    }

      
    let data =new FormData();
    data.append("name",this.user.name);
    data.append("alamat",this.user.alamat);
    // data.append("telp",this.user.telp);
    data.append("email",this.user.email);
    data.append("password",this.user.password);
    
  
      let headers : any = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('content-Type', 'application/json');
     
      let url : any = this.path+'/mobile/register';
  
      let load = this.loading.create({ //Declaraci Animasi Please wait
        //content: 'Please Wait',
        spinner : 'crescent'
      });
      //load.present();
 
      await this.http.post(url, data, headers)
      .subscribe((res : any) =>
        {
          //load.dismiss(); //menghilangkan login
  
          // melakukan cek berhasil atau tidak saat registrasi
          if(res.type=="success"){
            this.navCtrl.navigateRoot('/menu/login');
          } else{
              console.log(res);
          }
        },
        (error : any) =>
        {
          //load.dismiss(); // menghilangkan loading
          console.log(error);
          console.log('Something went wrong!');
        });
  
  }

  ngOnInit() {
  }

 

}
