import { createSelector } from '@ngrx/store';

import { UserLibState } from '../models/UserLibState';

export const selectCurrentUser = createSelector(
  (state: { user: UserLibState }) => state.user.currentUser,
  currentUser => currentUser,
);