import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICoffeeMachineState } from '../state/machine.state';
import { ICoffeeMachine } from 'src/app/models/coffeeMachine.interface';

export const getMachine = (state: IAppState) => state.machine;

export const getResources = createSelector(
  getMachine,
  (state: ICoffeeMachineState) =>
    state.resources
);

export const getParams = createSelector(
  getMachine,
  (state: ICoffeeMachineState) =>
    state.params,
);

export const getCupStatus = createSelector(
  getMachine,
  (state: ICoffeeMachine) =>
  state.isCupInside,
);

export const getRunningStatus = createSelector(
  getMachine,
  (state: ICoffeeMachine) =>
  state.isRunning,
);
