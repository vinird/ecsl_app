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
import { Storage } from '@ionic/storage';
/*
  Generated class for the Schedule page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SchedulePage = (function () {
    function SchedulePage(navCtrl, navParams, conferencesProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conferencesProvider = conferencesProvider;
        this.storage = storage;
        this.searchTerm = "";
        this.switchEvent = "all";
        this.localEvents = [];
        this.events = conferencesProvider.getEvents();
        this.getLocalEvents();
    }
    SchedulePage.prototype.ionViewDidLoad = function () { };
    SchedulePage.prototype.swipeEvent = function (e) {
        console.log(e);
        if (e.velocity < -0.3 && e.distance > 150)
            $$;
        e.;
        {
            this.switchEvent = "favorities";
            this.getLocalEvents();
        }
        if (e.velocity > 0.1 && e.distance > 150) {
            this.switchEvent = "all";
            this.allEvents();
        }
    };
    SchedulePage.prototype.getLocalEvents = function () {
        var _this = this;
        this.storage.get('events').then(function (val) {
            if (val != null) {
                _this.localEvents = val;
            }
        }).catch(function (ex) {
        });
        this.searchTerm = "";
    };
    SchedulePage.prototype.allEvents = function () {
        this.searchTerm = "";
    };
    SchedulePage.prototype.goToEventDetail = function (event) {
        this.conferencesProvider.setCurrentEvent(event);
        this.navCtrl.push(EventPage);
    };
    SchedulePage.prototype.setFilteredTerm = function () {
        var _this = this;
        return this.events.filter(function (event) {
            if (event.title != undefined && _this.searchTerm != undefined) {
                return event.title.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
            }
        });
    };
    SchedulePage.prototype.evalDate = function (date) {
        if (this.date == date) {
            return false;
        }
        else {
            this.date = date;
            return true;
        }
    };
    SchedulePage.prototype.getEventType = function (id) {
        return this.conferencesProvider.getEventType(id).title;
    };
    return SchedulePage;
}());
SchedulePage = __decorate([
    Component({
        selector: 'page-schedule',
        templateUrl: 'schedule.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ConferencesProvider, Storage])
], SchedulePage);
export { SchedulePage };
//# sourceMappingURL=schedule.js.map