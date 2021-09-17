import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamePageComponent } from './game/game-page/game-page.component';
import { HighlightDirective } from './directive/highlight.directive';
import { CountdownModule } from 'ngx-countdown';
import { NgxTimerModule } from 'ngx-timer';

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
