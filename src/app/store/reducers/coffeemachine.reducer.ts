import { initialState } from '../state/coffemachine.state';
import * as coffeeAction from '../actions/coffee.action';
import { CoffeeBrew, CoffeeResources, Person } from 'src/app/models/coffeeMachine';

export function reducer(state = initialState,
  action: coffeeAction.Action) {
    switch (action.type) {
      case coffeeAction.NEW_BREW: {
        const newBrew: CoffeeBrew = action.payload;
        return {
          ...state,
          ids: [state.ids, newBrew.id],
          coffeeBrewings: { ...state.coffeeBrewings, newBrew },
          money: { ...state.money, newBrew }
        };
      }
      case coffeeAction.ADD_RES: {
        const newRes: CoffeeResources = action.payload;
        return {
          ...state,
          coffeeRes: {...state.coffeeRes, newRes }
        };
      }
      case coffeeAction.ADD_MONEY: {
        const newMoney: Person = action.payload;
        return {
          ...state,
          money: {...state.money, newMoney}
        };
      }
    default:
      return state;
  }
}
