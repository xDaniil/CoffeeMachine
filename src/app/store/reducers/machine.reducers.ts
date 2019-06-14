import { ICoffeeMachineState, initialCoffeeMachineState } from '../state/machine.state';
import { EMachineActions, MachineActions } from '../actions/machine.actions';
import { createFormGroupState, formGroupReducer } from 'ngrx-forms';
import { ICoffeeResources } from '../../models/coffeeResources.interface';
import { FormNames } from '../forms/formNames';

export const machineReducers = (
  state = initialCoffeeMachineState,
  action: MachineActions
): ICoffeeMachineState => {
  const machineResForm = formGroupReducer(state.resources, action);
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
