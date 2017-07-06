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
var StartPage = (function () {
    function StartPage(navCtrl, navParams, conferencesProvider, loadingCtrl, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conferencesProvider = conferencesProvider;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.errors = false;
        this.connection = "";
        this.localExist = false;
        this.localData = [];
        this.checkLocal();
    }
    StartPage.prototype.ionViewDidLoad = function () { };
    StartPage.prototype.checkLocal = function () {
        var _this = this;
        this.storage.get('data').then(function (val) {
            if (val != null) {
                _this.localData = val;
                _this.localExist = true;
            }
        }).catch(function (ex) {
            _this.localExist = false;
        });
    };
    StartPage.prototype.useLocal = function () {
        if (this.localData != null) {
            this.conferencesProvider.setData(this.localData);
            this.conferencesProvider.getEvents();
            this.goToHomePage();
        }
        else {
            this.connection = "Conexión fallida";
            this.loader.dismiss();
        }
    };
    StartPage.prototype.updateLocal = function (data) {
        var _this = this;
        this.storage.set('data', data).then(function (d) {
            _this.presentToast("Agenda actualizada", 3000);
            _this.localData = data;
            _this.localExist = true;
            _this.connection = "";
        }).catch(function (ex) {
            _this.connection = "Conexión fallida";
            _this.loader.dismiss();
        });
    };
    StartPage.prototype.tryConnection = function () {
        var _this = this;
        this.presentLoading();
        var data = this.conferencesProvider.getRemoteConferences();
        this.conferencesData = data.subscribe(function (data) { return _this.conferencesData = data; }, function (error) { _this.connection = "Conexión fallida"; _this.loader.dismiss(); }, function () {
            _this.loader.dismiss();
            _this.conferencesProvider.setData(_this.conferencesData);
            _this.conferencesProvider.getEvents();
            _this.updateLocal(_this.conferencesData);
        });
    };
    StartPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Conectando...",
        });
        this.loader.present();
    };
    StartPage.prototype.goToHomePage = function () {
        this.navCtrl.push(TabsPage);
    };
    StartPage.prototype.presentToast = function (text, time) {
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
    return StartPage;
}());
StartPage = __decorate([
    Component({
        selector: 'page-start',
        templateUrl: 'start.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ConferencesProvider, LoadingController, Storage, ToastController])
], StartPage);
export { StartPage };
//# sourceMappingURL=start.js.map