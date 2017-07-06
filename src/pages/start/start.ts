import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { ConferencesProvider } from '../../providers/conferences-provider';

import { Storage } from '@ionic/storage';

import { ToastController } from 'ionic-angular';

/*
  Generated class for the Start page.
   
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  conferencesData: any;
  errors = false;
  loader: any;
  connection = "";
  public localExist = true;
  public localData = [];

  constructor( public navCtrl: NavController, public navParams: NavParams, public conferencesProvider: ConferencesProvider, public loadingCtrl: LoadingController, public storage: Storage, public toastCtrl: ToastController) 
  {
    this.checkLocal();
  }


  ionViewDidLoad() {}
 
  public checkLocal(){
    this.storage.get('data').then((val) => {
      if(val != null){
        this.localData = val;
        this.localExist = true;
      } else {
        this.localExist = false;
      }
    }).catch((ex) => {
      this.localExist = false;
    });
  }

  public useLocal(){
    if(this.localData != null){
      this.conferencesProvider.setData(this.localData);
      this.conferencesProvider.getEvents();
      this.goToHomePage();
    } else {
      this.connection = "Conexión fallida"; this.loader.dismiss();
    }
  }

  public updateLocal(data){
    this.storage.set('data', data).then((d) => {
        this.presentToast("Agenda actualizada", 3000);
        this.localData = data;
        this.localExist = true;
        this.connection = "";
      }).catch((ex) => {
        this.connection = "Conexión fallida"; this.loader.dismiss();
      });
  }

  tryConnection()
  {
    this.presentLoading();
     var data = this.conferencesProvider.getRemoteConferences();
     this.conferencesData = data.subscribe(
       data => this.conferencesData = data,
       error => {this.connection = "Conexión fallida"; this.loader.dismiss();},
       () => 
         {
           this.loader.dismiss();
           this.conferencesProvider.setData(this.conferencesData);
           this.conferencesProvider.getEvents();
           this.updateLocal(this.conferencesData);
         }
       );
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Conectando...",
    });
    this.loader.present();
  }

  goToHomePage(){
    this.navCtrl.push(TabsPage);
  }

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
