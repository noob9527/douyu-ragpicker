import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PopupComponent } from './popup/popup.component';
import { EventPageComponent } from './event-page/event-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'event-page', component: EventPageComponent },
  { path: 'popup', component: PopupComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PopupComponent,
    EventPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
