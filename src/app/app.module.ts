import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {myReducer} from './reducer';
import {MyEffects} from './effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      my: myReducer,
    }),
    EffectsModule.forRoot([MyEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
