import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileManagementComponent } from './user-profile-management/user-profile-management.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';

const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  { path: 'profile', component: UserProfileManagementComponent },
  { path: 'login', component: UserAuthenticationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
