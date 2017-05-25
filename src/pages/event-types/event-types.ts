import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConferencesProvider } from '../../providers/conferences-provider';

import { EventsPage } from '../events/events';

/*
  Generated class for the EventTypes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-types',
  templateUrl: 'event-types.html'
})
export class EventTypesPage {

	public eventTypes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public conferencesProvider : ConferencesProvider) 
  {
  		this.eventTypes = conferencesProvider.getEventTypes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventTypesPage');
  }

  public getEventList(eventType){
    var eventsTemp = this.conferencesProvider.getEvents();
    var events = [];
    for (var i = 0; i < eventsTemp.length; i++) {
      if(eventsTemp[i].event_type_id == eventType.id){
          events.push(eventsTemp[i])
      }
    }
    this.conferencesProvider.setEventList(events);
    this.opentEventList();
  }

  opentEventList(){
    this.navCtrl.push( EventsPage );
  }

}
