import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { IAppState } from '../state/app.state';

import { InsertCoin,
         InsertCoinSuccess,
         InsertCoinFail,
         EUserActions} from '../actions/user.actions';
import { UserService } from '../../services/user.services';

@Injectable()
export class UserEffects {
  @Effect()
    insertCoin$ = this._actions$.pipe(
      ofType<InsertCoin>(EUserActions.InsertCoin),

    );

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
    ) {}
}

