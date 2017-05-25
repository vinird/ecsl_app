import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConferencesProvider } from '../../providers/conferences-provider';

import { EventPage } from '../event/event';


/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

	events : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public conferencesProvider: ConferencesProvider) 
  {
  	this.events = conferencesProvider.getEventList()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  goToEventDetail(event)
  {
    this.conferencesProvider.setCurrentEvent(event);
    this.navCtrl.push( EventPage )
  }

  public eventsExist(){
    if (this.events.length < 1) {
      return true;
    }
    return false;
  }

}
