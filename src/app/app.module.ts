import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { appReducers } from './store/reducers/app.reducers';
import { MachineResComponent } from './machine-res/machine-res.component';
import { UserResComponent } from './user-res/user-res.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineResComponent,
    UserResComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
