import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { ConferencesProvider } from '../../providers/conferences-provider';

import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	lists:any[] = []; 
  data: any;
  errors = false;
  loader: any;

  test : any;

  constructor(public navCtrl: NavController, public conferencesProvider: ConferencesProvider, public loadingCtrl: LoadingController) 
  {
    this.data = this.conferencesProvider.getData();
  }

  ionViewDidLoad() {}

  openMap() {
    this.navCtrl.push(MapPage);
  }

}
