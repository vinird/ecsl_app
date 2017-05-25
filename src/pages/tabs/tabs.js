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
import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { TracksPage } from '../tracks/tracks';
// import { ListsPage } from '../lists/lists';
import { RoomsPage } from '../rooms/rooms';
import { SchedulePage } from '../schedule/schedule';
import { EventTypesPage } from '../event-types/event-types';
var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab0Root = HomePage;
        this.tab1Root = HomePage;
        this.tab2Root = SchedulePage;
        this.tab3Root = RoomsPage;
        this.tab4Root = TracksPage;
        this.tab5Root = EventTypesPage;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Component({
        templateUrl: 'tabs.html'
    }),
    __metadata("design:paramtypes", [])
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.js.map