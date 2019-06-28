import { IUserState } from '../state/user.state';
import { initialUserState } from '../state/user.state';
import { EUserActions, UserActions } from '../actions/user.actions';
import { createFormGroupState, createFormStateReducerWithUpdate, updateGroup, validate } from 'ngrx-forms';
import { IUser } from '../../models/user.interface';
import { greaterThanOrEqualTo, required } from 'ngrx-forms/validation';
import { FormNames } from '../forms/formNames';

const userResFormReducer = createFormStateReducerWithUpdate<IUser>(updateGroup<IUser>({
  money: validate([required, greaterThanOrEqualTo(0)]),
}));

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  const userResForm = userResFormReducer(state, action);
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
        ...createFormGroupState<IUser>(FormNames.UserResourcesForm, { money: state.value.money - 1 })
      };
    }
    default:
      return state;
  }
};
