import { createAction, props } from '@ngrx/store';

import { ICurrentUser } from '../models/CurrentUser';

export const setCurrentUser = createAction(
  '[UserLib] Set Current User',
  props<{ currentUser: ICurrentUser }>(),
);

export const clearCurrentUser = createAction(
  '[UserLib] Clear Current User',
);

export const loginUser = createAction(
  '[UserLib] Login User',
  props<{ username: string, password: string }>(),
);

export const logoutUser = createAction(
  '[UserLib] Logout User',  
);