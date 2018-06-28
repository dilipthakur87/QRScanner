import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    // platform.registerBackButtonAction(function(event) {
    //   this.home();
    // }, 101);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  home() {
    this.navCtrl.push(HomePage);
  }  

}
