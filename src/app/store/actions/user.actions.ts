import { Action } from '@ngrx/store';
import { IUser } from '../../models/user.interface';

export enum EUserActions {
  UpdateBalance = '[User] Update Balance',
  InsertCoin = '[User] Insert Coin',
  InsertCoinSuccess = '[User] Insert Coin Success',
  UserErrorMessage = '[User] Error',
}

export class UpdateBalance implements Action {
  public readonly type = EUserActions.UpdateBalance;
  constructor(public payload: IUser) {}
}

export class InsertCoin implements Action {
  public readonly type = EUserActions.InsertCoin;
}

export class InsertCoinSuccess implements Action {
  public readonly type = EUserActions.InsertCoinSuccess;
}

export class UserErrorMessage implements Action {
  public readonly type = EUserActions.UserErrorMessage;
  constructor(public payload: string) {}
}

export type UserActions = UpdateBalance | InsertCoin | InsertCoinSuccess | UserErrorMessage;
