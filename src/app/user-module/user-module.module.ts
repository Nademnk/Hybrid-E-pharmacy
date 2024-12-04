import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileManagementComponent } from './user-profile-management/user-profile-management.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  { path: 'profile', component: UserProfileManagementComponent },
  { path: 'login', component: UserAuthenticationComponent }
];



@NgModule({
  declarations: [
    UserRegistrationComponent,
    UserProfileManagementComponent,
    UserAuthenticationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    FormsModule,
   
  
  ]
})
export class UserModuleModule { }
