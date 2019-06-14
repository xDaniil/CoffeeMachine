import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICoffeeMachineState } from '../state/machine.state';

const getRes = (state: IAppState) => state.machine;

export const getResources = createSelector(
  getRes,
  (state: ICoffeeMachineState) =>
  state.resources
);

export const getParams = createSelector(
  getRes,
  (state: ICoffeeMachineState) =>
  state.params,
);


