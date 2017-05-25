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
  Generated class for the Track page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var TrackPage = (function () {
    function TrackPage(navCtrl, navParams, conferencesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conferencesProvider = conferencesProvider;
        this.descriptions = [];
        this.track = this.conferencesProvider.getSelectedTrack();
        this.breakDescription();
    }
    TrackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackPage');
    };
    TrackPage.prototype.getEventList = function (track) {
        var eventsTemp = this.conferencesProvider.getEvents();
        var events = [];
        for (var i = eventsTemp.length - 1; i >= 0; i--) {
            if (eventsTemp[i].track_id == track.id) {
                events.push(eventsTemp[i]);
            }
        }
        this.conferencesProvider.setEventList(events);
        this.opentEventList();
    };
    TrackPage.prototype.opentEventList = function () {
        this.navCtrl.push(EventsPage);
    };
    TrackPage.prototype.breakDescription = function () {
        this.descriptions = this.track.description.split("-");
        this.descriptions.shift();
    };
    return TrackPage;
}());
TrackPage = __decorate([
    Component({
        selector: 'page-track',
        templateUrl: 'track.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ConferencesProvider])
], TrackPage);
export { TrackPage };
//# sourceMappingURL=track.js.map