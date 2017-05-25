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
import { TrackPage } from '../track/track';
/*
  Generated class for the Tracks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var TracksPage = (function () {
    function TracksPage(navCtrl, navParams, conferencesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conferencesProvider = conferencesProvider;
        this.tracks = conferencesProvider.getTracks();
    }
    TracksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TracksPage');
    };
    TracksPage.prototype.goToTrackSelected = function (track) {
        this.conferencesProvider.setSelectedTrack(track);
        this.navCtrl.push(TrackPage);
    };
    return TracksPage;
}());
TracksPage = __decorate([
    Component({
        selector: 'page-tracks',
        templateUrl: 'tracks.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ConferencesProvider])
], TracksPage);
export { TracksPage };
//# sourceMappingURL=tracks.js.map