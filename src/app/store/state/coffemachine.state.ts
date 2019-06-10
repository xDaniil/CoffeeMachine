import { CoffeeBrew, CoffeeResources, Person } from '../../models/coffeeMachine';

export interface State {
  ids: number[];
  coffeeBrewings: { [id: number]: CoffeeBrew};
  money: { [id: number]: Person};
  coffeeRes: CoffeeResources;
}

export const initialState: State = {
  ids: [1],
  coffeeBrewings: {
    1: {
      id: 1,
      coffeType: null,
      isCreamed: false,
      Sugar: 0,
      isCupPlastic: true
    }
  },
  money: {
    1: {
      id: 1,
      money: 0
    }
  },
  coffeeRes: {
    Arabica: 0,
    Arabusta: 0,
    Cream: 0,
    Sugar: 0,
    PlasticCup: 0,
    CardCup: 0
  }
};

export const getIds = (state: State) => state.ids;
export const getCoffees = (state: State) => state.coffeeBrewings;
export const getMoney = (state: State) => state.money;
export const getCoffeeRes = (state: State) => state.coffeeRes;
