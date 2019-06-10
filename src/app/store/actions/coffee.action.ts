import { Action } from '@ngrx/store';
import { ICoffeeParams, IUser, ICoffeeResources } from '../../models/coffeeMachine';

export const NEW_BREW = '[coffeeBrewings] NewBrew';
export const ADD_RES = '[coffeeRes] AddRes';
export const ADD_MONEY = '[money] AddMoney';

export class NewBrew implements Action {
  readonly type = NEW_BREW;
  constructor(public payload: ICoffeeParams) {}
}

export class AddRes implements Action {
  readonly type = ADD_RES;
  constructor(public payload: ICoffeeResources) {}
}

export class AddMoney implements Action {
  readonly type = ADD_MONEY;
  constructor(public payload: IUser) {}
}

export type Action = NewBrew | AddRes | AddMoney;
