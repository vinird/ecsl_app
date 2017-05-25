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
import { UsersProvider } from '../../providers/users-provider';
/*
  Generated class for the Lists page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ListsPage = (function () {
    function ListsPage(navCtrl, navParams, usersProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersProvider = usersProvider;
        this.loadingCtrl = loadingCtrl;
        this.anyErrors = false;
        this.finished = false;
    }
    ListsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.presentLoading();
        console.log('ionViewDidLoad ListsPage');
        this.userData = this.usersProvider.getRemoteUsers();
        this.userData = this.userData.subscribe(function (data) { return _this.userData = data; }, function (error) { return _this.anyErrors = true; }, function () {
            _this.loader.dismiss();
            _this.usersList = _this.userData.results;
        });
    };
    ListsPage.prototype.consoleData = function () {
        console.log(this.usersList);
        // console.log(this.finished);
    };
    ListsPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        this.loader.present();
    };
    return ListsPage;
}());
ListsPage = __decorate([
    Component({
        selector: 'page-lists',
        templateUrl: 'lists.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, UsersProvider, LoadingController])
], ListsPage);
export { ListsPage };
//# sourceMappingURL=lists.js.map