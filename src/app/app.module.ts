import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { AsidePrimaryComponent } from './aside/aside-primary/aside-primary.component';
import { AsideSecondaryComponent } from './aside/aside-secondary/aside-secondary.component';
import { AsidePrimaryIconsComponent } from './aside/aside-primary/aside-primary-icons/aside-primary-icons.component';
import { AsidePrimaryToolsComponent } from './aside/aside-primary/aside-primary-tools/aside-primary-tools.component';
import { AsideSecondaryMenuComponent } from './aside/aside-secondary/aside-secondary-menu/aside-secondary-menu.component';
import { AsideSecondaryFriendsComponent } from './aside/aside-secondary/aside-secondary-friends/aside-secondary-friends.component';
import { AsideSecondarySearchComponent } from './aside/aside-secondary/aside-secondary-search/aside-secondary-search.component';
import { MainHeaderComponent } from './main/main-header/main-header.component';
import { PersonCardComponent } from './main/main-body/main-right/person-card/person-card.component';
import { MainRightComponent } from './main/main-body/main-right/main-right.component';
import { MainBodyComponent } from './main/main-body/main-body.component';
import { PersonEventsComponent } from './main/main-body/main-right/person-events/person-events.component';
import { MainLeftComponent } from './main/main-body/main-left/main-left.component';
import { ScheduleComponent } from './main/main-body/main-left/schedule/schedule.component';
import { StatsComponent } from './main/main-body/main-left/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    MainComponent,
    AsidePrimaryComponent,
    AsideSecondaryComponent,
    AsidePrimaryIconsComponent,
    AsidePrimaryToolsComponent,
    AsideSecondaryMenuComponent,
    AsideSecondaryFriendsComponent,
    AsideSecondarySearchComponent,
    MainHeaderComponent,
    PersonCardComponent,
    MainRightComponent,
    MainBodyComponent,
    PersonEventsComponent,
    MainLeftComponent,
    ScheduleComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
