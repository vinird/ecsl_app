import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { ConferencesProvider } from '../../providers/conferences-provider';

import { EventsPage } from '../events/events';

import { PhotoViewer } from '@ionic-native/photo-viewer';


/*
  Generated class for the Rooms page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html'
})
export class RoomsPage {

	rooms: any;
  public totalEvents = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public conferencesProvider: ConferencesProvider, public toastCtrl: ToastController, private photoViewer: PhotoViewer) 
  {
    this.totalEvents = this.conferencesProvider.getEventsLenght();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomsPage');
    this.rooms = this.conferencesProvider.getRooms();
  }

  roomSelected(room)
  {
    this.conferencesProvider.setEventList(room.events);
    if(room.events.length > 0)
    {
      this.navCtrl.push( EventsPage );
    } else{
      this.presentToast();
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Esta sala no tiene eventos asignados',
      duration: 3000
    });
    toast.present();
  }

  openMapImage(url, title) {
    let baseUrl = "https://ecsl2017.softwarelibre.ca";
    this.photoViewer.show(baseUrl + url, title, {share: true});
  }

}
