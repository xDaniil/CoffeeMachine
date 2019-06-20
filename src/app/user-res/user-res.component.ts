import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserState } from '../store/state/user.state';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { getUser } from '../store/selectors/user.selectors';
import { InsertCoin } from '../store/actions/user.actions';

@Component({
  selector: 'app-user-res',
  templateUrl: './user-res.component.html',
  styleUrls: ['./user-res.component.css']
})
export class UserResComponent {

  condition: any;
  formState$: Observable<IUserState>;

  constructor(private _store: Store<IAppState>) {
    this.formState$ = _store.select(getUser);
  }

  insertCoin() {
    this._store.dispatch(new InsertCoin());
  }

}
