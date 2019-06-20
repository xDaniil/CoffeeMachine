import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
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
import { MachineEffects } from './store/effects/machine.effects';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['user', 'machine'],
    rehydrate: true,
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

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
    StoreModule.forRoot(appReducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects, MachineEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
