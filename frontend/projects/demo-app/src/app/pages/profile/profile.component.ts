import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../models/AppState';
import { UsersService, ICurrentUser, selectCurrentUser } from '@t4d-wnow/user-lib';
import { ChangePasswordForm } from '@t4d-wnow/user-lib';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public currentUser$: Observable<ICurrentUser> = this.store.pipe(select(selectCurrentUser));

  constructor(
    public usersSvc: UsersService,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

  public doChangePassword(changePasswordForm: ChangePasswordForm) {
    const { username, userKind } = this.usersSvc.getCurrentUser()!;

    this.usersSvc.changePassword(
      username, userKind,
      changePasswordForm.currentPassword,
      changePasswordForm.newPassword).subscribe();
  }

}
