import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { userReducer } from '../state/slices/user/user.reducer';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('user', userReducer)
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }