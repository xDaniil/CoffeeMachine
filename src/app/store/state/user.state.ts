import { IUser } from '../../models/user.interface';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { FormNames } from '../forms/formNames';

export type IUserState = FormGroupState<IUser>;

export const initialUserState: IUserState = createFormGroupState<IUser>(FormNames.UserResourcesForm, {
  money: 0,
});

