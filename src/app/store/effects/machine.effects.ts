import { Injectable } from '@angular/core';
import { Effect, Actions, ofType} from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { IAppState } from '../state/app.state';

import { StartBrew,
         StartedBrew,
         EMachineActions } from '../actions/machine.actions';
import { map, withLatestFrom } from 'rxjs/operators';
import { CoffeeMachineComponent } from '../../coffee-machine/coffee-machine.component';

@Injectable()
export class MachineEffects {

  @Effect()
  startBrew$ = this._actions$.pipe(
    ofType<StartBrew>(EMachineActions.StartBrew),
    withLatestFrom(this._store),
    map(([action, state]) => {
      const params = CoffeeMachineComponent.prototype.params;
      const coffeeType = params.coffeeType === 1 ? 'arabica' : 'arabusta';
      const cupType = params.isCupPlastic ? 'plastic' : 'card';
      if (state.machine.isCoinInserted && state.machine.isCupInside !== true &&
        state.machine.resources.value[coffeeType] >= 1 &&
        state.machine.resources.value.sugar >= params.sugar &&
        state.machine.resources.value.cream > Number(params.isCreamed) &&
        state.machine.resources.value[`${cupType}Cup`] >= 1
      ) {
        return new StartedBrew(params);
      }
    })
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
