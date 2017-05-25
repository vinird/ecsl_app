import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConferencesProvider } from '../../providers/conferences-provider';

import { TrackPage } from '../track/track';


/*
  Generated class for the Tracks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tracks',
  templateUrl: 'tracks.html'
})
export class TracksPage {

	public tracks:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public conferencesProvider:ConferencesProvider) 
  {
  	this.tracks = conferencesProvider.getTracks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TracksPage');
  }

  goToTrackSelected(track)
  {
  	this.conferencesProvider.setSelectedTrack(track);
  	this.navCtrl.push( TrackPage );
  }

}
