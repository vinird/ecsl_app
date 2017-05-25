import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the ConferencesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConferencesProvider { 

	public data:any;
  public event:any; 
  public eventsLenght = 0;
  public roomEvents:any;
  public selectedTrack:any;
  public eventLists:{};

  constructor( public http: Http ) {
    
  }

  setEventList(events){
    this.eventLists = events;
  }
  getEventList(){
    return this.eventLists;
  }
  // Obtiene los datos del API
  getRemoteConferences()
  {
  	return this.http.get('https://ecsl2017.softwarelibre.ca/registro/api/v1/conferences/ECSL2017/')
  	// return this.http.get("../assets/data/data.json")
  	.map(res => res.json());
  }

  // Obtiene los valores de las salas
  getRooms()
  {
  	var rooms = [];
  	for (var i = 0; i < this.data.rooms.length; i++) 
  	{
  		rooms.push(this.data.rooms[i]);
  	}
  	return rooms;
  }

  // Obtinene todos los eventos y agregar el valor _time a los eventos
  getEvents()
  {
    this.eventsLenght = 0 
  	var events = [];
  	for (var i = 0; i < this.data.rooms.length; i++) 
  	{
  		if(this.data.rooms[i].events != undefined)
  		{
  			for (var a = 0; a < this.data.rooms[i].events.length; a++) 
  			{
  				if(this.data.rooms[i].events[a] != undefined)
  				{
            var time = this.data.rooms[i].events[a].start_time;
            time = time.slice(11, 16);
            // var time = new Date(this.data.rooms[i].events[a].start_time);
            // console.log(time)
            this.data.rooms[i].events[a]._time = time;
            this.data.rooms[i].events[a]._room = i;
  					events.push(this.data.rooms[i].events[a]);
            this.eventsLenght = this.eventsLenght + 1;
  				}
  			}
  		}
  	}
  	return events;
  }

  // Obtiene el total de eventos
  getEventsLenght()
  {
    return this.eventsLenght;
  }


  // Asigna el evento actual
  setCurrentEvent(event)
  {
    this.event = event;
  }

  // Obtiene el evento actual
  getCurrentEvent()
  {
    return this.event;
  }

  // Obtiene las temáticas
  getTracks()
  {
    var tracks = [];
    for (var i = 0; i < this.data.tracks.length; i++) 
    {
      tracks.push(this.data.tracks[i]);
    }
    return tracks;
  }

  // Asigna el track seleccionado en tracks page
  setSelectedTrack(track)
  {
    this.selectedTrack = track;
  }

  // Obtiene el track seleccionado
  getSelectedTrack()
  {
    return this.selectedTrack;
  }

  // Obtiene los tipos de eventos
  getEventTypes()
  {
    return this.data.event_types;
  }

  // Obtiene un tipo de evento
  getEventType(typeId)
  {
    var eventType = null;
    for (var i = 0; i < this.data.event_types.length; i++) 
    {
      if(this.data.event_types[i].id == typeId) {
        eventType = this.data.event_types[i];
        return eventType;
      }
    }
    return eventType;
  }


  setData(data)
  {
    this.data = data.conferences[0];
  }

  getData()
  {
  	return this.data;
  }

}
