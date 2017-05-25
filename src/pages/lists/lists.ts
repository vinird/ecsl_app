import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { UsersProvider } from '../../providers/users-provider';

/*
  Generated class for the Lists page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})

export class ListsPage {

	loader: any;
	userData: any;
	usersList: any;
	anyErrors = false;
	finished = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersProvider: UsersProvider, public loadingCtrl: LoadingController) 
  {

  }

  ionViewDidLoad() {
  	this.presentLoading();
    console.log('ionViewDidLoad ListsPage');
    this.userData = this.usersProvider.getRemoteUsers();
    this.userData = this.userData.subscribe(
    	data => this.userData = data,
    	error => this.anyErrors = true,
          () => 
	          {
	          	this.loader.dismiss();
	          	this.usersList = this.userData.results;
	          }
          );
  }

  consoleData()
  {
  	console.log(this.usersList);
  	// console.log(this.finished);
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }

}
