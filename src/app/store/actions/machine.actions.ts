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
  ResumeBrew = '[Coffee Machine] Resume Brew',
  FinishBrew = '[Coffee Machine] Finish Brew',
  BrewStateCheck = '[Coffee Machine] Brew State Check',
  SaveStartTime = '[Coffee Machine] Save Start Time',
  MachineErrorMessage = '[Coffee Machine] Error',
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
  constructor(public payload: ICoffeeParams) {}
}

export class ResumeBrew implements Action {
  public readonly type = EMachineActions.ResumeBrew;
  constructor(public payload: number) {}
}

export class FinishBrew implements Action {
  public readonly type = EMachineActions.FinishBrew;
}

export class BrewStateCheck implements Action {
  public readonly type = EMachineActions.BrewStateCheck;
}

export class SaveStartTime implements Action {
  public readonly type = EMachineActions.SaveStartTime;
  constructor(public payload: Date) {}
}

export class MachineErrorMessage implements Action {
  public readonly type = EMachineActions.MachineErrorMessage;
  constructor(public payload: string) {}
}

export type MachineActions = UpdateResources |
  UpdateParams | MachineInsertCoinSuccess |
  RemoveCup | StartBrew | StartedBrew |
  FinishBrew | BrewStateCheck | SaveStartTime |
  MachineErrorMessage | ResumeBrew;
