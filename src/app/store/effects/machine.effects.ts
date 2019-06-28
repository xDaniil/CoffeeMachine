import { Injectable } from '@angular/core';
import { Effect, Actions, ofType} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, withLatestFrom, delay, tap, mergeMap } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  StartBrew, StartedBrew,
  EMachineActions, FinishBrew,
  SaveStartTime, MachineErrorMessage, ResumeBrew, BrewStateCheck
} from '../actions/machine.actions';
import { of } from 'rxjs';
import { getMachine } from '../selectors/machine.selectors';

@Injectable()
export class MachineEffects {

  @Effect()
  startBrew$ = this._actions$.pipe(
    ofType<StartBrew>(EMachineActions.StartBrew),
    withLatestFrom(this._store),
    map(([, state]) => {
      const params = state.machine.params;
      const coffeeType = params.coffeeType ?
        (params.coffeeType === 1 ? 'arabica' : 'arabusta') : null;
      console.log(coffeeType);
      const cupType = params.isCupPlastic ? 'plastic' : 'card';
      if (state.machine.isCoinInserted && state.machine.isCupInside !== true &&
        !state.machine.isRunning &&
        state.machine.resources.value[coffeeType] >= 1 &&
        state.machine.resources.value.sugar >= params.sugar &&
        state.machine.resources.value.cream > Number(params.isCreamed) &&
        state.machine.resources.value[`${cupType}Cup`] >= 1
      ) {
        return new StartedBrew(params);
      }
      return new MachineErrorMessage('Not able to start!');
    }),
  );

  @Effect()
  startedBrew$ = this._actions$.pipe(
    ofType<StartedBrew>(EMachineActions.StartedBrew),
    tap(() => this._store.dispatch(new SaveStartTime(new Date()))),
    delay(10000),
    map(() =>
    new FinishBrew()),
  );

  @Effect()
  resumeBrew$ = this._actions$.pipe(
    ofType<ResumeBrew>(EMachineActions.ResumeBrew),
    mergeMap(action => of(action).pipe(
      delay(action.payload),
      map(() => new FinishBrew()),
    )),
    tap(newAction => console.log(newAction))
  );

  @Effect({ dispatch: false })
  brewStateCheck$ = this._actions$.pipe(
    ofType<BrewStateCheck>(EMachineActions.BrewStateCheck),
    withLatestFrom(this._store.select(getMachine)),
    map(([, machineState]) => {
      if (machineState.isRunning) {
        const currDate = new Date();
        const dateDiff = currDate.valueOf() - machineState.brewStartTime.valueOf();
        const timeGap = 10000 - dateDiff;
        this._store.dispatch(new ResumeBrew(timeGap > 0 ? timeGap : 0));
      }
    }),
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
