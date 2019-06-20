import { ICoffeeMachine } from '../../models/coffeeMachine.interface';
import { ICoffeeParams } from '../../models/coffeeParams.interface';
import { ICoffeeResources } from '../../models/coffeeResources.interface';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { FormNames } from '../forms/formNames';

export interface ICoffeeMachineState extends ICoffeeMachine {
  resources: FormGroupState<ICoffeeResources>;
  params: ICoffeeParams;
}

export const initialCoffeeMachineState: ICoffeeMachineState = {
  isCoinInserted: false,
  isCupInside: false,
  isRunning: false,
  brewStartTime: null,
  resources: createFormGroupState<ICoffeeResources>(FormNames.MachineResourcesForm, {
    arabica: 0,
    arabusta: 0,
    plasticCup: 0,
    cardCup: 0,
    cream: 0,
    sugar: 0,
  }),
  params: {
    coffeeType: null,
    isCreamed: false,
    sugar: 0,
    isCupPlastic: true,
  }
};
