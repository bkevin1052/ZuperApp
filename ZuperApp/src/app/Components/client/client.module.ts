import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    ProfileComponent,
    EditProfileComponent,
    ChangePasswordComponent
  ]
})
export class ClientModule { }
