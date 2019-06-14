import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IUserState } from '../state/user.state';

export const getUser = (state: IAppState) => state.user;

export const getUserData = createSelector(
  getUser,
  (state: IUserState) => state.value,
);
