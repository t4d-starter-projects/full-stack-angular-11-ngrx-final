import { createReducer, on } from '@ngrx/store';

import { setCurrentUser, clearCurrentUser } from '../actions/current-user.actions';
import { ICurrentUser } from '../models/CurrentUser';

export const initialState: Readonly<ICurrentUser> = {} as ICurrentUser;

export const currentUserReducer = createReducer(
  initialState,
  on(setCurrentUser, (_, { currentUser }) => currentUser),
  on(clearCurrentUser, () => ({} as ICurrentUser)),
);
