import { createSelector, State } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICoffeeMachineState } from '../state/machine.state';

const getRes = (state: IAppState) => state.machine;

export const getResArabica = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
    state.resources.arabica,
);

export const getResArabusta = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
    state.resources.arabusta,
);

export const getResPlasticCup = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
    state.resources.plasticCup,
);

export const getResCardCup = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
    state.resources.cardCup,
);

export const getResCream = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
    state.resources.cream,
);

export const getResSugar = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
    state.resources.sugar,
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

export const getMachineCoffeeTypeParams = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
    state.params.coffeeType,
);

export const getCreamParams = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
    state.params.isCreamed,
);

export const getCupParams = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
    state.params.isCupPlastic,
);

export const getSugarParams = createSelector (
  getRes,
  (state: ICoffeeMachineState) =>
    state.params.sugar,
);
