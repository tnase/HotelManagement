import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailschambrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailschambre',
  templateUrl: 'detailschambre.html',
})
export class DetailschambrePage {

  code:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.code=navParams.get('code');
    console.log(this.code);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailschambrePage');
  }

}
