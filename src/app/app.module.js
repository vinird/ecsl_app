var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UsersPage } from '../pages/users/users';
// Custom pages
import { ListsPage } from '../pages/lists/lists';
import { StartPage } from '../pages/start/start';
import { RoomsPage } from '../pages/rooms/rooms';
import { EventsPage } from '../pages/events/events';
import { EventPage } from '../pages/event/event';
import { SchedulePage } from '../pages/schedule/schedule';
import { TracksPage } from '../pages/tracks/tracks';
import { TrackPage } from '../pages/track/track';
import { EventTypesPage } from '../pages/event-types/event-types';
import { EventTypePage } from '../pages/event-type/event-type';
// Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Pipes
import { OrderBy } from '../pipes/orderBy';
import { Filter } from '../pipes/filter';
// Providers
// import { UsersProvider } from '../providers/users-provider'
import { ConferencesProvider } from '../providers/conferences-provider';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            AboutPage,
            ContactPage,
            HomePage,
            TabsPage,
            UsersPage,
            ListsPage,
            StartPage,
            RoomsPage,
            EventsPage,
            SchedulePage,
            // Pipes
            OrderBy,
            Filter,
            // 
            EventPage,
            TracksPage,
            TrackPage,
            EventTypesPage,
            EventTypePage
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot(MyApp),
            IonicStorageModule.forRoot(),
            HttpModule,
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            AboutPage,
            ContactPage,
            HomePage,
            TabsPage,
            ListsPage,
            UsersPage,
            StartPage,
            RoomsPage,
            EventsPage,
            SchedulePage,
            EventPage,
            TracksPage,
            TrackPage,
            EventTypesPage,
            EventTypePage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            ConferencesProvider
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map