import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, Platform, Events, MenuController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { Router } from '@angular/router';

import { ProfileService } from "./../../services/profile.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  @ViewChild(NavController) navCtrl: NavController;

  pages = [
    {
      title: 'Inflasi Terkini',
      url: '/menu/inflasi-terkini',
      icon: 'trending-up'
    },
    {
      title: 'Data Series',
      children: [
        {
          title: 'Bulanan',
          url: '/menu/bulananchart',
          icon: 'pie'
        },
        {
          title: 'YoY',
          url: '/menu/yoychart',
          icon: 'pulse'
        },
        {
          title: 'Tahun Kalender',
          url: '/menu/tahun-kalender',
          icon: 'podium'
        },
      ]
    },
    {
      title: 'Inflasi Pengeluaran',
      url: '/menu/inflasi-pengeluaran',
      icon: 'logo-dropbox'
    },
    {
      title: 'Inflasi Komoditas',
      url: '/menu/inflasi-komoditas',
      icon: 'logo-buffer'
    },
    {
      title: 'Akun',
      url: '/menu/akun',
      icon: 'person'
    },
    {
      title: 'Tentang',
      url: '/menu/tentang',
      icon: 'information-circle'
    }

  ];

  constructor(
    private router: Router,
    public menuCtrl: MenuController, 
    public profile: ProfileService,
    public events : Events) { 
  

  }

  ngOnInit() {
  }

  logoutClicked() {
    this.router.navigate(['/menu/login']);
    localStorage.clear();

    this.profile.login = false;
  }

}
