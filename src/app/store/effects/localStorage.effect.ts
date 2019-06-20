import { Injectable } from '@angular/core';
import { Effect, Actions, ofType} from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { tap, map, filter } from 'rxjs/operators';
import { UpdateStore } from '../actions/store.actions';
import { fromEvent } from 'rxjs';

@Injectable()

export class LocalStorageSync {
  @Effect()
  updateState = fromEvent<StorageEvent>(window, 'storage').pipe(
    filter(evt => evt.key === '__coffeemachine'),
    filter(evt => evt.newValue !== null),
    map(evt => {
      const newState = JSON.parse(evt.newValue);

      return this._store.dispatch(new UpdateStore(newState)) ;
    }),
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
