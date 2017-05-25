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
  Generated class for the ConferencesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ConferencesProvider = (function () {
    function ConferencesProvider(http) {
        this.http = http;
        this.eventsLenght = 0;
    }
    ConferencesProvider.prototype.setEventList = function (events) {
        this.eventLists = events;
    };
    ConferencesProvider.prototype.getEventList = function () {
        return this.eventLists;
    };
    // Obtiene los datos del API
    ConferencesProvider.prototype.getRemoteConferences = function () {
        return this.http.get('https://ecsl2017.softwarelibre.ca/registro/api/v1/conferences/ECSL2017/')
            .map(function (res) { return res.json(); });
    };
    // Obtiene los valores de las salas
    ConferencesProvider.prototype.getRooms = function () {
        var rooms = [];
        for (var i = 0; i < this.data.rooms.length; i++) {
            rooms.push(this.data.rooms[i]);
        }
        return rooms;
    };
    // Obtinene todos los eventos y agregar el valor _time a los eventos
    ConferencesProvider.prototype.getEvents = function () {
        this.eventsLenght = 0;
        var events = [];
        for (var i = 0; i < this.data.rooms.length; i++) {
            if (this.data.rooms[i].events != undefined) {
                for (var a = 0; a < this.data.rooms[i].events.length; a++) {
                    if (this.data.rooms[i].events[a] != undefined) {
                        var time = this.data.rooms[i].events[a].start_time;
                        time = time.slice(11, 16);
                        // var time = new Date(this.data.rooms[i].events[a].start_time);
                        // console.log(time)
                        this.data.rooms[i].events[a]._time = time;
                        events.push(this.data.rooms[i].events[a]);
                        this.eventsLenght = this.eventsLenght + 1;
                    }
                }
            }
        }
        return events;
    };
    // Obtiene el total de eventos
    ConferencesProvider.prototype.getEventsLenght = function () {
        return this.eventsLenght;
    };
    // Asigna el evento actual
    ConferencesProvider.prototype.setCurrentEvent = function (event) {
        this.event = event;
    };
    // Obtiene el evento actual
    ConferencesProvider.prototype.getCurrentEvent = function () {
        return this.event;
    };
    // Obtiene las temáticas
    ConferencesProvider.prototype.getTracks = function () {
        var tracks = [];
        for (var i = 0; i < this.data.tracks.length; i++) {
            tracks.push(this.data.tracks[i]);
        }
        return tracks;
    };
    // Asigna el track seleccionado en tracks page
    ConferencesProvider.prototype.setSelectedTrack = function (track) {
        this.selectedTrack = track;
    };
    // Obtiene el track seleccionado
    ConferencesProvider.prototype.getSelectedTrack = function () {
        return this.selectedTrack;
    };
    // Obtiene los tipos de eventos
    ConferencesProvider.prototype.getEventTypes = function () {
        return this.data.event_types;
    };
    // Obtiene un tipo de evento
    ConferencesProvider.prototype.getEventType = function (typeId) {
        var eventType = null;
        for (var i = 0; i < this.data.event_types.length; i++) {
            if (this.data.event_types[i].id == typeId) {
                eventType = this.data.event_types[i];
                return eventType;
            }
        }
        return eventType;
    };
    ConferencesProvider.prototype.setData = function (data) {
        this.data = data.conferences[0];
    };
    ConferencesProvider.prototype.getData = function () {
        return this.data;
    };
    return ConferencesProvider;
}());
ConferencesProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ConferencesProvider);
export { ConferencesProvider };
//# sourceMappingURL=conferences-provider.js.map