import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersProvider {


  constructor(public http: Http) {
    console.log('Hello UsersProvider Provider');
  }

  getRemoteUsers()
  {
  	return this.http.get('https://randomuser.me/api/?results=10')
  	.map(res => res.json())
  	// .subscribe(data => this.data = data);
  }

  getLocalData()
  {
  	this.http.get('assets/data/usersProviderData.json')
  	.map(res => res.json())
  	.subscribe(data => {
  	});
  }

}
