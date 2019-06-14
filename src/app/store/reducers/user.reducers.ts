import { IUserState } from '../state/user.state';
import { initialUserState } from '../state/user.state';
import { EUserActions, UserActions } from '../actions/user.actions';
import { formGroupReducer } from 'ngrx-forms';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  const userResForm = formGroupReducer(state, action);
  if (userResForm !== state) {
    state = {
      ...state,
      ...userResForm,
    };
  }

  switch (action.type) {
    case EUserActions.UpdateBalance: {
      return {
        ...state,
        value: {
          ...(state.value),
          money: action.payload.money,
        }
      };
    }
    case EUserActions.InsertCoinSuccess: {
      return {
        ...state,
        value: {
          ...(state.value),
          money: state.value.money - 1,
        }
      };
    }
    default:
      return state;
  }
};
