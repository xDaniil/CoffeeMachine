import { createSelector, State } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICoffeeMachineState } from '../state/machine.state';

const getRes = (state: IAppState) => state.machine;

export const getResources = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
  state.resources
);

export const getCoinStatus = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
    state.isCoinInserted,
);

export const getCupStatus = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
    state.isCupInside,
);

export const getMachineStatus = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
    state.isRunning,
);

export const getParams = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
  state.params,
);
