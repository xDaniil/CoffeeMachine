import { Action } from '@ngrx/store';
import { IUser } from '../../models/user.interface';

export enum EUserActions {
  UpdateBalance = '[User] Update Balance',
  InsertedCoin = '[User] Inserted Coin',
}

export class UpdateBalance implements Action {
  public readonly type = EUserActions.UpdateBalance;
  constructor(public payload: IUser) {}
}

export class InsertedCoin implements Action {
  public readonly type = EUserActions.InsertedCoin;
}

export type UserActions = UpdateBalance | InsertedCoin;
