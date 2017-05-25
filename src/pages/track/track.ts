import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConferencesProvider } from '../../providers/conferences-provider';

import { EventsPage } from '../events/events';

/*
  Generated class for the Track page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-track',
  templateUrl: 'track.html'
})
export class TrackPage {

	public track : any;
  public descriptions = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public conferencesProvider: ConferencesProvider) 
  {
  	this.track = this.conferencesProvider.getSelectedTrack();
    this.breakDescription()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackPage');
  }

  public getEventList(track){
    var eventsTemp = this.conferencesProvider.getEvents();
    var events = [];
    for (var i = eventsTemp.length - 1; i >= 0; i--) {
      if (eventsTemp[i].track_id == track.id) {
          events.push(eventsTemp[i])
      }
    }
    this.conferencesProvider.setEventList(events);
    this.opentEventList();
  }

  opentEventList(){
    this.navCtrl.push( EventsPage );
  }

  breakDescription()
  {
     this.descriptions = this.track.description.split("-")
     this.descriptions.shift();
  }

}
