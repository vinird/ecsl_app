var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the UsersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var UsersProvider = (function () {
    function UsersProvider(http) {
        this.http = http;
        console.log('Hello UsersProvider Provider');
    }
    UsersProvider.prototype.getRemoteUsers = function () {
        return this.http.get('https://randomuser.me/api/?results=10')
            .map(function (res) { return res.json(); });
        // .subscribe(data => this.data = data);
    };
    UsersProvider.prototype.getLocalData = function () {
        this.http.get('assets/data/usersProviderData.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
    };
    return UsersProvider;
}());
UsersProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], UsersProvider);
export { UsersProvider };
//# sourceMappingURL=users-provider.js.map