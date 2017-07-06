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
import { ConferencesProvider } from '../../providers/conferences-provider';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the Event page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var EventPage = (function () {
    function EventPage(navCtrl, navParams, conferencesProvider, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conferencesProvider = conferencesProvider;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.localEvents = [];
        this.counter = Array;
        this.event = this.conferencesProvider.getCurrentEvent();
        this.eventType = this.conferencesProvider.getEventType(this.event.event_type_id);
        this.getLocalEvents();
    }
    EventPage.prototype.getLocalEvents = function () {
        var _this = this;
        this.storage.get('events').then(function (val) {
            if (val != null) {
                _this.localEvents = val;
            }
        }).catch(function (ex) {
        });
    };
    EventPage.prototype.addFavorite = function (fab) {
        var _this = this;
        if (!this.checkIfExist()) {
            this.localEvents.push(this.event);
            this.storage.set('events', this.localEvents).then(function (data) {
                _this.presentToast("Evento agregado a favoritos", 3000);
                fab.close();
            }).catch(function (ex) {
                _this.presentToast("Error al agregar", 3000);
            });
        }
        else {
            // ya esta agregado
            this.presentToast("Este evento ya está agregado", 3000);
        }
    };
    EventPage.prototype.removeFavorite = function (fab) {
        var _this = this;
        if (this.removeOfEvents()) {
            this.storage.set('events', this.localEvents).then(function (data) {
                _this.presentToast("Evento eliminado de favoritos", 3000);
                fab.close();
            }).catch(function (ex) {
                _this.presentToast("Error al eliminar", 3000);
            });
        }
    };
    EventPage.prototype.removeOfEvents = function () {
        for (var i = 0; i < this.localEvents.length; i++) {
            if (this.event.guid == this.localEvents[i].guid) {
                this.localEvents.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    EventPage.prototype.checkIfExist = function () {
        for (var i = 0; i < this.localEvents.length; i++) {
            if (this.event.guid == this.localEvents[i].guid) {
                return true;
            }
        }
        return false;
    };
    EventPage.prototype.ionViewDidLoad = function () { };
    EventPage.prototype.presentToast = function (text, time) {
        var toast = this.toastCtrl.create({
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
    };
    return EventPage;
}());
EventPage = __decorate([
    Component({
        selector: 'page-event',
        templateUrl: 'event.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ConferencesProvider, Storage, ToastController])
], EventPage);
export { EventPage };
//# sourceMappingURL=event.js.map