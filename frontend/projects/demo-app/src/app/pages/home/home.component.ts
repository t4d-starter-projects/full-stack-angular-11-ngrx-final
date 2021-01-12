import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


import { ICurrentUser, UsersService, selectCurrentUser, loginUser } from '@t4d-wnow/user-lib';
import { CurrentUser } from '@t4d-wnow/user-lib';
import { LoginForm } from '@t4d-wnow/user-lib';
import { AppState } from '../../models/AppState';

import { setErrorMessage, clearErrorMessage } from '@t4d-wnow/shared-lib';
import { selectErrorMessage } from '../../selectors/error-message.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public errorMessage$: Observable<string> = this.store.pipe(select(selectErrorMessage));

  public currentUser$: Observable<ICurrentUser> = this.store.pipe(select(selectCurrentUser));

  constructor(
    private usersSvc: UsersService,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

  doLogin(loginForm: LoginForm): void {

    this.store.dispatch(loginUser({ username: loginForm.username, password: loginForm.password }));

    // this.usersSvc.loginEmployee(loginForm.username, loginForm.password).subscribe({
    //   next: () => {
    //     // this.errorMessage = '';
    //     this.store.dispatch(clearErrorMessage());
    //   },
    //   error: (err) => {
    //     if (err.status === 404) {
    //       // this.errorMessage = 'Username and password not found.';
    //       this.store.dispatch(setErrorMessage({ errorMessage: 'Username and password not found.' }));
    //     } else {
    //       // this.errorMessage = 'Unknown login error.';
    //       this.store.dispatch(setErrorMessage({ errorMessage: 'Unknown login error.' }));
    //     }
    //   }
    // });
  }

  doClear(): void {
    console.log('clicked clear');
    // this.errorMessage = '';
    this.store.dispatch(clearErrorMessage());
  }

}
