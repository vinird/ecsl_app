import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConferencesProvider } from '../../providers/conferences-provider';
import { EventPage } from '../event/event';

import { Storage } from '@ionic/storage';

/*
  Generated class for the Schedule page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

	events : any;
  public _time: any;
  public searchTerm = "";
  public date: any;
  switchEvent: string = "all";
  public localEvents = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public conferencesProvider: ConferencesProvider, public storage: Storage ) 
  {
  	this.events = conferencesProvider.getEvents();
    this.getLocalEvents();
  }

  ionViewDidLoad() {}

  swipeEvent(e){
    // console.log(e)
    if (e.velocity < -0 ) {
      this.switchEvent = "favorities";
      this.getLocalEvents();
    } else if (e.velocity >= 0 ) {
      this.switchEvent = "all";      
      this.allEvents();
    }

  }

  getLocalEvents(){
    this.storage.get('events' ).then((val) => {
      if(val != null){
        this.localEvents = val;
      }
    }).catch((ex) => {
    });
    this.searchTerm = "";
  }

  allEvents(){
    this.searchTerm = "";
  }

  goToEventDetail(event)
  {
  	this.conferencesProvider.setCurrentEvent(event);
  	this.navCtrl.push( EventPage )
  } 

  setFilteredTerm()
  {
    return this.events.filter(event => {
      if(event.title != undefined && this.searchTerm != undefined)
      {
      return event.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      }
    })
  }

  evalDate(date)
  {
    if (this.date == date) 
    {
      return false;
    } else {
      this.date = date;
      return true;
    }
  }

  getEventType(id)
  {
    return this.conferencesProvider.getEventType(id).title;
  }

}
