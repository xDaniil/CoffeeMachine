import { ActionReducerMap, ActionReducer, State, Action } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { userReducers } from './user.reducers';
import { machineReducers } from './machine.reducers';
import { StoreAction, UpdateStore } from '../actions/store.actions';

export const appReducers: ActionReducerMap<IAppState, any> = {
  user: userReducers,
  machine: machineReducers,
};

export function persistStateReducer(_reducer: ActionReducer<IAppState>) {
  const localStorageKey = '__coffeemachine';
  return (state: IAppState | undefined, action: Action) => {
    if (state === undefined) {
      console.log(12);
      const persisted = localStorage.getItem(localStorageKey);
      return persisted ? JSON.parse(persisted) : _reducer(state, action);
    }

    const nextState = _reducer(state, action);
    localStorage.setItem(localStorageKey, JSON.stringify(nextState));
    return nextState;
  };
}

export function updateStateReducer(reducer: ActionReducer<IAppState>, action: UpdateStore, state: IAppState) {
    if (action.type === StoreAction.UpdateStore) {
      return {
        ...state,
        state: action.payload,
      };
    }
    return reducer(state, action);
  }

