import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { getUser } from '../store/selectors/user.selectors';
import { IUserState } from '../store/state/user.state';
import { IAppState } from '../store/state/app.state';
import { InsertCoinSuccess } from '../store/actions/machine.actions';
import { InsertCoinFail } from '../store/actions/user.actions';

@Injectable()
export class UserService {

  money$: Observable<IUserState>;

  constructor(private _store: Store<IAppState>) {
    this.money$ =  _store.select(getUser);
  }

  moneyStr = (this.money$.toString());
// tslint:disable-next-line: radix
  moneyInt = parseInt(this.moneyStr);

  action = (this.moneyInt > 1) ? InsertCoinSuccess : InsertCoinFail;
}
