import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GhostgameComponent } from './ghostgame/ghostgame.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { GhostgameService } from './service/ghostgame.service';

@NgModule({
  declarations: [
    AppComponent,
    GhostgameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GhostgameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
