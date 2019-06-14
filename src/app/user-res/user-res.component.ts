import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { getUserData } from '../store/selectors/user.selectors';
import { IAppState } from '../store/state/app.state';
import { GetCoin } from '../store/actions/user.actions';

@Component({
  selector: 'app-user-res',
  templateUrl: './user-res.component.html',
  styleUrls: ['./user-res.component.css']
})
export class UserResComponent implements OnInit {

  userMoney$ = this._store.pipe(select(getUserData));

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.dispatch(new GetCoin());
  }

}
