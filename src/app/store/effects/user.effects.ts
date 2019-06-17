import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { IAppState } from '../state/app.state';

import { InsertCoin,
         InsertCoinSuccess,
         InsertCoinFail,
         EUserActions} from '../actions/user.actions';
import { map, withLatestFrom } from 'rxjs/operators';
import { MachineInsertCoinSuccess } from '../actions/machine.actions';

@Injectable()
export class UserEffects {

  @Effect({dispatch: true})
  insertCoin$ = this._actions$.pipe(
    ofType<InsertCoin>(EUserActions.InsertCoin),
    withLatestFrom(this._store),
    map(([action, state]) => {
      if (state.machine.isCoinInserted) {
        return new InsertCoinFail('Coin already inserted!');
      }
      if (state.user.value.money > 0) {
        this._store.dispatch(new InsertCoinSuccess());
        return new MachineInsertCoinSuccess();
      }
      return new InsertCoinFail('Not enough money!');
    })
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}

