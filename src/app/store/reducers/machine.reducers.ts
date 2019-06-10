import { ICoffeeMachineState, initialCoffeeMachineState } from '../state/machine.state';
import { EMachineActions, MachineActions } from '../actions/machine.actions';

export const machineReducers = (
  state = initialCoffeeMachineState,
  action: MachineActions
): ICoffeeMachineState => {
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
        resources: action.payload,
      };
    }
    case EMachineActions.InsertedCoin: {
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
