import { ICoffeeMachineState, initialCoffeeMachineState } from '../state/machine.state';
import { EMachineActions, MachineActions } from '../actions/machine.actions';
import { createFormGroupState, createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
import { ICoffeeResources } from '../../models/coffeeResources.interface';
import { FormNames } from '../forms/formNames';
import { greaterThanOrEqualTo, required } from 'ngrx-forms/validation';

const machineResFormReducer = createFormStateReducerWithUpdate<ICoffeeResources>(updateGroup<ICoffeeResources>({
  arabica: validate([required, greaterThanOrEqualTo(0)]),
  arabusta: validate([required, greaterThanOrEqualTo(0)]),
  cream: validate([required, greaterThanOrEqualTo(0)]),
  sugar: validate([required, greaterThanOrEqualTo(0)]),
  plasticCup: validate([required, greaterThanOrEqualTo(0)]),
  cardCup: validate([required, greaterThanOrEqualTo(0)]),
}));

export const machineReducers = (
  state = initialCoffeeMachineState,
  action: MachineActions
): ICoffeeMachineState => {
  const machineResForm = machineResFormReducer(state.resources, action);
  if (state.resources !== machineResForm) {
    state = {
      ...state,
      resources: machineResForm,
    };
  }

  switch (action.type) {
    case EMachineActions.UpdateParams: {
      return {
        ...state,
        params: action.payload,
      };
    }
    case EMachineActions.UpdateResources: {
      return {
        ...state,
        resources: createFormGroupState<ICoffeeResources>(FormNames.MachineResourcesForm, action.payload),
      };
    }
    case EMachineActions.InsertCoinSuccess: {
      return {
        ...state,
        isCoinInserted: true,
      };
    }
    case EMachineActions.StartedBrew: {
      return {
        ...state,
        isRunning: true,
        isCupInside: true,
      };
    }
    case EMachineActions.RemoveCup: {
      return {
        ...state,
        isCupInside: false,
      };
    }
    case EMachineActions.FinishBrew: {
      return {
        ...state,
        isRunning: false,
      };
    }
    default:
      return state;
  }
};
