var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ConferencesProvider } from '../../providers/conferences-provider';
import { EventsPage } from '../events/events';
/*
  Generated class for the Rooms page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var RoomsPage = (function () {
    function RoomsPage(navCtrl, navParams, conferencesProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conferencesProvider = conferencesProvider;
        this.toastCtrl = toastCtrl;
        this.totalEvents = 0;
        this.totalEvents = this.conferencesProvider.getEventsLenght();
    }
    RoomsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomsPage');
        this.rooms = this.conferencesProvider.getRooms();
    };
    RoomsPage.prototype.roomSelected = function (room) {
        this.conferencesProvider.setEventList(room.events);
        if (room.events.length > 0) {
            this.navCtrl.push(EventsPage);
        }
        else {
            this.presentToast();
        }
    };
    RoomsPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Esta sala no tiene eventos asignados',
            duration: 3000
        });
        toast.present();
    };
    return RoomsPage;
}());
RoomsPage = __decorate([
    Component({
        selector: 'page-rooms',
        templateUrl: 'rooms.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ConferencesProvider, ToastController])
], RoomsPage);
export { RoomsPage };
//# sourceMappingURL=rooms.js.map