import { Action } from '@ngrx/store';
import { IAppState } from '../state/app.state';

export enum StoreAction  {
  UpdateStore = '[StoreSync] Store Sync',
  }
export class UpdateStore implements Action {
  public readonly type = StoreAction.UpdateStore;
  constructor(public payload: IAppState) {}
}
