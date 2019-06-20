import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICoffeeMachineState } from '../state/machine.state';

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
