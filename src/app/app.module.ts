import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { appReducers } from './store/reducers/app.reducers';
import { MachineResComponent } from './machine-res/machine-res.component';
import { UserResComponent } from './user-res/user-res.component';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxFormsModule } from 'ngrx-forms';
import { CoffeeMachineComponent } from './coffee-machine/coffee-machine.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MachineResComponent,
    UserResComponent,
    CoffeeMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgrxFormsModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
