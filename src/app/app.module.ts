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
    StoreModule.forRoot(appReducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
