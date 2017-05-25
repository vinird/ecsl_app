import { Component } from '@angular/core';

import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { TracksPage } from '../tracks/tracks';
// import { ListsPage } from '../lists/lists';
import { RoomsPage } from '../rooms/rooms';
import { SchedulePage } from '../schedule/schedule';
import { EventTypesPage } from '../event-types/event-types';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab0Root: any = HomePage;
  tab1Root: any = HomePage;
  tab2Root: any = SchedulePage;
  tab3Root: any = RoomsPage;
  tab4Root: any = TracksPage;
  tab5Root: any = EventTypesPage;

  constructor() {

  }
}
