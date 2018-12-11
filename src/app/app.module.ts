import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { EventPageComponent } from './event-page/event-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

const routes: Routes = [
  { path: 'popup', component: PopupComponent },
  { path: 'event-page', component: EventPageComponent },
  { path: '', redirectTo: 'popup', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    EventPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
