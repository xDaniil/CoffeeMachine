import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../store/state/app.state';
import { getResources } from '../store/selectors/machineRes.selector';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { ICoffeeResources } from '../models/coffeeResources.interface';


@Component({
  selector: 'app-machine-res',
  templateUrl: './machine-res.component.html',
  styleUrls: ['./machine-res.component.css'],
})
export class MachineResComponent {
  formState$: Observable<FormGroupState<ICoffeeResources>>;

  constructor(private _store: Store<IAppState>) {
    this.formState$ = _store.select(getResources);
  }
}
