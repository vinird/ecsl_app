import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {ListsPage} from '../lists/lists'

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  goToPageLists(){
  	this.navCtrl.push( ListsPage );
  }

}
