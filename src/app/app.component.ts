import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from './store/state/app.state';
import { GetMachine } from './store/actions/machine.actions';
import { getResources } from './store/selectors/machineRes.selector';
import { getCoinStatus } from './store/selectors/machineRes.selector';
import { getCupStatus } from './store/selectors/machineRes.selector';
import { getMachineStatus } from './store/selectors/machineRes.selector';
import { getParams } from './store/selectors/machineRes.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coffeemachine';

  resources$ = this._store.pipe(select(getResources));
  coinStatus$ = this._store.pipe(select(getCoinStatus));
  cupStatus$ = this._store.pipe(select(getCupStatus));
  machineStatus$ = this._store.pipe(select(getMachineStatus));
  params$ = this._store.pipe(select(getParams));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this._store.dispatch(new GetMachine());
  }
}
