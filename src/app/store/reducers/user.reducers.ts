import { IUserState } from '../state/user.state';
import { initialUserState } from '../state/user.state';
import { EUserActions, UserActions } from '../actions/user.actions';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.UpdateBalance: {
      return {
        ...state,
        money: action.payload.money,
      };
    }
    case EUserActions.InsertCoinSuccess: {
      return {
        ...state,
        money: state.money - 1,
      };
    }
    default:
      return state;
  }
};
