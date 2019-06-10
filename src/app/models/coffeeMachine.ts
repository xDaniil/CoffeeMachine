export interface CoffeeBrew {
  id: number;
  coffeType: number;
  isCreamed: boolean;
  Sugar: number;
  isCupPlastic: boolean;
}

export interface Person {
  id: number;
  money: number;
}

export interface CoffeeResources {
  Arabica: number;
  Arabusta: number;
  Cream: number;
  Sugar: number;
  PlasticCup: number;
  CardCup: number;
}
