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
import { EventPage } from '../event/event';
/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var EventsPage = (function () {
    function EventsPage(navCtrl, navParams, conferencesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conferencesProvider = conferencesProvider;
        this.events = conferencesProvider.getEventList();
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage.prototype.goToEventDetail = function (event) {
        this.conferencesProvider.setCurrentEvent(event);
        this.navCtrl.push(EventPage);
    };
    EventsPage.prototype.eventsExist = function () {
        if (this.events.length < 1) {
            return true;
        }
        return false;
    };
    return EventsPage;
}());
EventsPage = __decorate([
    Component({
        selector: 'page-events',
        templateUrl: 'events.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ConferencesProvider])
], EventsPage);
export { EventsPage };
//# sourceMappingURL=events.js.map