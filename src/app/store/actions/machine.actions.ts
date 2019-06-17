import { Action } from '@ngrx/store';
import { ICoffeeResources } from '../../models/coffeeResources.interface';
import { ICoffeeParams } from '../../models/coffeeParams.interface';

export enum EMachineActions {
  UpdateResources = '[Coffee Machine] Update Resources',
  UpdateParams = '[Coffee Machine] Update Parameters',
  InsertCoinSuccess = '[Coffee Machine] Inserted Coin',
  RemoveCup = '[Coffee Machine] Remove Cup',
  StartBrew = '[Coffee Machine] Start Brew',
  StartedBrew = '[Coffee Machine] Started Brew',
  FinishBrew = '[Coffee Machine] Finish Brew',
}

export class UpdateResources implements Action {
  public readonly type = EMachineActions.UpdateResources;
  constructor(public payload: ICoffeeResources) {}
}

export class UpdateParams implements Action {
  public readonly type = EMachineActions.UpdateParams;
  constructor(public payload: ICoffeeParams) {}
}

export class MachineInsertCoinSuccess implements Action {
  public readonly type = EMachineActions.InsertCoinSuccess;
}

export class RemoveCup implements Action {
  public readonly type = EMachineActions.RemoveCup;
}

export class StartBrew implements Action {
  public readonly type = EMachineActions.StartBrew;
}

export class StartedBrew implements Action {
  public readonly type = EMachineActions.StartedBrew;
}
export class FinishBrew implements Action {
  public readonly type = EMachineActions.FinishBrew;
}

export type MachineActions = UpdateResources | UpdateParams | MachineInsertCoinSuccess | RemoveCup | StartBrew | StartedBrew | FinishBrew;
