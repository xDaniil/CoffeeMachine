import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { UpdateResources } from '../store/actions/machine.actions';
import { IAppState } from '../store/state/app.state';
import { getResources } from '../store/selectors/machineRes.selector';


@Component({
  selector: 'app-machine-res',
  templateUrl: './machine-res.component.html',
  styleUrls: ['./machine-res.component.css'],
})
export class MachineResComponent {

  resources$ = this._store.pipe(select(getResources));

  constructor(private _store: Store<IAppState>) { }

  updateResources(value) {
    this._store.dispatch(new UpdateResources(value));
  }
}
