import { IUserState, initialUserState } from './user.state';
import { ICoffeeMachineState, initialCoffeeMachineState } from './machine.state';

export interface IAppState {
  user: IUserState;
  machine: ICoffeeMachineState;
}

export const initialAppState: IAppState = {
  user: initialUserState,
  machine: initialCoffeeMachineState,
};

export function getInitialState() {
  return initialAppState;
}
