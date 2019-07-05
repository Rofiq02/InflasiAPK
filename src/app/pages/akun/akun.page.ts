import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController, ActionSheetController, LoadingController, Events,  } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


@Component({
  selector: 'app-akun',
  templateUrl: './akun.page.html',
  styleUrls: ['./akun.page.scss'],
})
export class AkunPage implements OnInit {

  options : CameraOptions;
  pic : any = './assets/imgs/no-avatar.png'
  mess : any; path: any;
  profile : any;
  name: string;
  alamat : string;
  telp : string;
  pekerjaan : string;
  instansi : string;
  jk : any;
  id : any;
  avatar : any;
  fileUrl: any = null;
  respData: any;
  actionSheet:any;

  capturedSnapURL:string;
 
  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(
    public navCtrl: NavController, 
    public actionSheetController: ActionSheetController,
    public camera : Camera,
    public http : HttpClient,
    public loading : LoadingController,
    public events : Events,
    private imagePicker: ImagePicker,
    private crop: Crop,
    private transfer: FileTransfer
  ) 
  {
    this.path = localStorage.getItem('path');

    this.getDataMember();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberPage');
  }

  presentActionSheet() {
    this.actionSheet = this.actionSheetController.create({
      header: 'Ambil Gambar',
      buttons: [{
        text: 'Camera',
          role: 'destructive',
          icon: 'camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Album',
          icon: 'image',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
      }]
    }).then(actionsheet => {
      actionsheet.present();
    });
  }
 
 




  // cropUpload() {
  //   this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {
  //     for (let i = 0; i < results.length; i++) {
  //         console.log('Image URI: ' + results[i]);
  //         this.crop.crop(results[i], { quality: 100 })
  //           .then(
  //             newImage => {
  //               console.log('new image path is: ' + newImage);
  //               const fileTransfer: FileTransferObject = this.transfer.create();
  //               const uploadOpts: FileUploadOptions = {
  //                  fileKey: 'file',
  //                  fileName: newImage.substr(newImage.lastIndexOf('/') + 1)
  //               };
  
  //               fileTransfer.upload(newImage, this.path+'/mobile/save_member', uploadOpts)
  //                .then((data) => {
  //                  console.log(data);
  //                  this.respData = JSON.parse(data.response);
  //                  console.log(this.respData);
  //                  this.fileUrl = this.respData.fileUrl;
  //                }, (err) => {
  //                  console.log(err);
  //                });
  //             },
  //             error => console.error('Error cropping image', error)
  //           );
  //     }
  //   }, (err) => { console.log(err); });
  // }


  getDataMember(){
    if(localStorage.getItem("profile")){
      this.profile = JSON.parse(localStorage.getItem("profile"));
      this.name = this.profile.name;
      this.alamat = this.profile.alamat;
      this.telp = this.profile.telp;
      this.pekerjaan = this.profile.pekerjaan;
      this.instansi = this.profile.instansi;
      this.jk = this.profile.jk;
      this.id = this.profile.id;
      this.avatar = this.profile.avatar;

    } else {
      this.profile = {id:'',name:'',alamat:'',jk:'',telp:'',pekerjaan:'',instansi:'',avatar:''};
    }
  }

  async saveMember(){
    
    // let req = new FormData();
    // req.append("id",this.id);
    // req.append("name",this.name);
    // req.append("alamat",this.alamat);
    // req.append("telp",this.telp);
    // req.append("pekerjaan",this.pekerjaan);
    // req.append("instansi",this.pekerjaan);
    // req.append("jk",this.jk);
    let req:any = {};
    req.id = this.id;
    req.name = this.name;
    req.email = this.profile.email;
    req.alamat = this.alamat;
    req.telp = this.telp;
    req.pekerjaan = this.pekerjaan;
    req.instansi = this.instansi;
    req.jk = this.jk;
    req.avatar = this.avatar;
    let headers 	: any		= new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let url       : any = this.path+'/mobile/save_member';

    
    // // Declarasi Animasi Please Wait
    // let load:any = this.loading.create({
    //   //content: 'Please Wait',
    //   spinner : 'crescent'
    // });
    // load.present();

    // Mengirim data ke server
    console.log(req)
    await this.http.post(url, JSON.stringify(req), headers)
    .subscribe((res : any) =>
    {
      
      //load.dismiss(); // menghilangkan loading

      // Melakukan cek berhasil atau tidak saat registrasi
      if(res.type=="success"){            
        this.events.publish("prof",JSON.stringify(res.profile));
        localStorage.setItem("profile",JSON.stringify(res.profile));
        this.navCtrl.navigateRoot('/menu/inflasi-terkini');    
      } else {
        this.mess = res.msg;
      }

      console.log(res);

    },
    (error : any) =>
    {      
      //load.dismiss(); // menghilangkan loading
      console.log(error);
      console.log('Something went wrong!');
    }); 
  }

  takePicture(sourceType){
    this.options = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.pic = base64Image;
     }, (err) => {
        console.log(err);
     });

  }




  ngOnInit() {
  }

}
