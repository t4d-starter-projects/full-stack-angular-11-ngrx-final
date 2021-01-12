import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { CurrentUserComponent } from './components/current-user/current-user.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { currentUserReducer } from './reducers/current-user.reducer';
import { CurrentUserEffects } from './effects/current-users.effects';

export const StoreFeatureModule = StoreModule.forFeature('user', { currentUser: currentUserReducer });
export const EffectsFeatureModule = EffectsModule.forFeature([CurrentUserEffects]);

@NgModule({
  declarations: [
    ChangePasswordFormComponent,
    CurrentUserComponent,
    LoginFormComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatSnackBarModule,
    StoreFeatureModule,
    EffectsFeatureModule,
  ],
  exports: [
    ChangePasswordFormComponent,
    CurrentUserComponent,
    LoginFormComponent,
    UserProfileComponent,
  ],
})
export class UserLibModule { }
