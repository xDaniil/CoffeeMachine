import { initialState } from '../state/machine.state';
import * as coffeeAction from '../actions/coffee.action';
import { ICoffeeParams, ICoffeeResources, IUser } from 'src/app/models/coffeeMachine';

export function reducer(state = initialState,
  action: coffeeAction.Action) {
    switch (action.type) {
      case coffeeAction.NEW_BREW: {
        const newBrew: ICoffeeParams = action.payload;
        return {
          ...state,
          ids: [state.ids, newBrew.id],
          coffeeBrewings: { ...state.coffeeBrewings, newBrew },
          money: { ...state.money, newBrew }
        };
      }
      case coffeeAction.ADD_RES: {
        const newRes: ICoffeeResources = action.payload;
        return {
          ...state,
          coffeeRes: {...state.coffeeRes, newRes }
        };
      }
      case coffeeAction.ADD_MONEY: {
        const newMoney: IUser = action.payload;
        return {
          ...state,
          money: {...state.money, newMoney}
        };
      }
    default:
      return state;
  }
}
