import { Action } from '@ngrx/store';
import { IUser } from '../../models/user.interface';

export enum EMachineActions {
  UpdateBalance = '[Coffee Machine] Update Resources',
}

export class UpdateResources implements Action {
  public readonly type = EMachineActions.UpdateBalance;
  constructor(public payload: IUser) {}
}
