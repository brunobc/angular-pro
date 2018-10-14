import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import {Store} from './store';

import {SongsModule} from './songs/songs.module';
import {AppComponent} from './app.component';
import { CreditCardDirective } from "@app/credit-card/credit-card.directive";
import { TooltipDirective } from "@app/tooltip/tooltip.directive";

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    SongsModule
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
