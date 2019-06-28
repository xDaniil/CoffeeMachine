import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IUserState } from '../store/state/user.state';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { getUser } from '../store/selectors/user.selectors';
import { InsertCoin } from '../store/actions/user.actions';
import { RemoveCup } from '../store/actions/machine.actions';
import { getRunningStatus } from '../store/selectors/machine.selectors';

@Component({
  selector: 'app-user-res',
  templateUrl: './user-res.component.html',
  styleUrls: ['./user-res.component.css']
})

export class UserResComponent {

  formState$: Observable<IUserState>;
  runningStatus$: Observable<boolean>;
  currentRunningStatus: Subscription;
  isRunning: boolean;

  constructor(private _store: Store<IAppState>) {
    this.formState$ = _store.select(getUser);
    this.runningStatus$ = this._store.select(getRunningStatus);
    this.currentRunningStatus = this.runningStatus$.subscribe(() => this.isRunning);
  }

  insertCoin() {
    this._store.dispatch(new InsertCoin());
  }

  removeCup() {
      this._store.dispatch(new RemoveCup());
  }

}
