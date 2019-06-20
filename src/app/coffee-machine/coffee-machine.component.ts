import { Component, OnInit } from '@angular/core';
import { ICoffeeParams } from '../models/coffeeParams.interface';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { BrewStateCheck, StartBrew, UpdateParams } from '../store/actions/machine.actions';

@Component({
  selector: 'app-coffee-machine',
  templateUrl: './coffee-machine.component.html',
  styleUrls: ['./coffee-machine.component.css']
})
export class CoffeeMachineComponent implements OnInit {
  params: ICoffeeParams = {
    coffeeType: null,
    sugar: 0,
    isCreamed: false,
    isCupPlastic: true
  };
  constructor(private _store: Store<IAppState>) {}

  startBrew() {
    this._store.dispatch(new UpdateParams(this.params));
    this._store.dispatch(new StartBrew());
  }

  ngOnInit(): void {
    this._store.dispatch(new BrewStateCheck());
  }
}
