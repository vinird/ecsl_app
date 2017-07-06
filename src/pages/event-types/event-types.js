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
import { EventsPage } from '../events/events';
/*
  Generated class for the EventTypes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var EventTypesPage = (function () {
    function EventTypesPage(navCtrl, navParams, conferencesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conferencesProvider = conferencesProvider;
        this.eventTypes = conferencesProvider.getEventTypes();
    }
    EventTypesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventTypesPage');
    };
    EventTypesPage.prototype.getEventList = function (eventType) {
        var eventsTemp = this.conferencesProvider.getEvents();
        var events = [];
        for (var i = 0; i < eventsTemp.length; i++) {
            if (eventsTemp[i].event_type_id == eventType.id) {
                events.push(eventsTemp[i]);
            }
        }
        this.conferencesProvider.setEventList(events);
        this.opentEventList();
    };
    EventTypesPage.prototype.opentEventList = function () {
        this.navCtrl.push(EventsPage);
    };
    return EventTypesPage;
}());
EventTypesPage = __decorate([
    Component({
        selector: 'page-event-types',
        templateUrl: 'event-types.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ConferencesProvider])
], EventTypesPage);
export { EventTypesPage };
//# sourceMappingURL=event-types.js.map