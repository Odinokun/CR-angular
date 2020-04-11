import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { AsidePrimaryComponent } from './aside/aside-primary/aside-primary.component';
import { AsideSecondaryComponent } from './aside/aside-secondary/aside-secondary.component';
import { AsidePrimaryIconsComponent } from './aside/aside-primary/aside-primary-icons/aside-primary-icons.component';
import { AsidePrimaryToolsComponent } from './aside/aside-primary/aside-primary-tools/aside-primary-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    MainComponent,
    AsidePrimaryComponent,
    AsideSecondaryComponent,
    AsidePrimaryIconsComponent,
    AsidePrimaryToolsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
