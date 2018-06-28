import { Component, ViewChild } from '@angular/core';
import { Platform, ToastController, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

import { QRScanner , QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  private isSanning: boolean = true;
  private isBackMode: boolean = true;
  private isFlashLightOn: boolean = false;
  public scanSub: any;
  scannedCode = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public qrScanner: QRScanner, public toastCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // this.scan();
    });
  }

}

