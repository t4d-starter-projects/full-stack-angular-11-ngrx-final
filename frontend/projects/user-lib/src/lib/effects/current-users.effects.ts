import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../services/users.service';
import { of } from 'rxjs';

import { exhaustMap, mergeMap, catchError } from 'rxjs/operators';
import { setCurrentUser, clearCurrentUser } from '../actions/current-user.actions';
import { ICurrentUser } from '../models/CurrentUser';

import { setErrorMessage, clearErrorMessage } from '@t4d-wnow/shared-lib';

@Injectable()
export class CurrentUserEffects {

  logoutUser$ = createEffect(() => this.actions$.pipe(
    ofType('[UserLib] Logout User'),
    mergeMap(() => of(
      clearErrorMessage(),
      clearCurrentUser(),
    )),
  ));

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType('[UserLib] Login User'),
    exhaustMap((action: { username: string,  password: string}) =>
      this.usersSvc.loginEmployee(action.username, action.password).pipe(
        mergeMap(() => {
          return of(
            setCurrentUser({ currentUser: this.usersSvc.getCurrentUser() as ICurrentUser }),
            clearErrorMessage(),
          );
        }),
        catchError((err: any) => {

          if (err.status === 404) {
            return of(
              setErrorMessage({ errorMessage: 'Username and password not found.' }),
              clearCurrentUser(),
            );
          } else {
            return of(
              setErrorMessage({ errorMessage: 'Unknown login error.' }),
              clearCurrentUser(),
            );
          }

        }),
      )),
  ));

  constructor(
    private actions$: Actions,
    private usersSvc: UsersService,
  ) { }
}