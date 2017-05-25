import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConferencesProvider } from '../../providers/conferences-provider';

import { Storage } from '@ionic/storage';

import { ToastController } from 'ionic-angular';

/*
  Generated class for the Event page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {

	public event : any;
  public eventType: any; 
  public localEvents = [];
  public counter = Array;

  constructor( public navCtrl: NavController, public navParams: NavParams, public conferencesProvider : ConferencesProvider, public storage: Storage, public toastCtrl: ToastController ) 
  {
    this.event = this.conferencesProvider.getCurrentEvent();
    this.eventType = this.conferencesProvider.getEventType(this.event.event_type_id);
    this.getLocalEvents();
  }

  getLocalEvents(){
    this.storage.get('events' ).then((val) => {
      if(val != null){
        this.localEvents = val;
      }
    }).catch((ex) => {
    });
  }

  addFavorite(fab){
    if( !this.checkIfExist() ){
      this.localEvents.push(this.event);
      this.storage.set('events', this.localEvents).then((data) => {
        this.presentToast( "Evento agregado a favoritos", 3000 );
        fab.close();
      }).catch((ex) => {
        this.presentToast( "Error al agregar", 3000 );
      });
    } else {
      // ya esta agregado
      this.presentToast( "Este evento ya está agregado", 3000 );
    }
  }

  removeFavorite(fab){
    if (this.removeOfEvents()) {
      this.storage.set('events', this.localEvents).then((data) => {
        this.presentToast( "Evento eliminado de favoritos", 3000 );
        fab.close();
      }).catch((ex) => {
        this.presentToast( "Error al eliminar", 3000 );
      });
    }
  }

  removeOfEvents(){
    for (var i = 0; i < this.localEvents.length; i++) {
      if(this.event.guid == this.localEvents[i].guid){
         this.localEvents.splice(i, 1);
         return true;
      }
    }
    return false;
  }

  public checkIfExist(){
    for (var i = 0; i < this.localEvents.length; i++) {
      if(this.event.guid == this.localEvents[i].guid){
        return true;
      }
    }
    return false;
  }

  ionViewDidLoad() {}

  presentToast(text, time) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: time,
      showCloseButton: true,
      position: "top",
      closeButtonText: "OK"
    });
    toast.present();

    // let alert = this.alertCtrl.create({
    //   subTitle: text,
    //   buttons: ['OK']
    // });
    // alert.present();
  }

}
