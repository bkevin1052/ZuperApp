import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { NewListComponent } from './new-list/new-list.component';
import { SendListComponent } from './send-list/send-list.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { ServicesComponent } from './services/services.component';

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
    ChangePasswordComponent,
    SendListComponent,
    NewListComponent,
    EditListComponent,
    ListMenuComponent,
    ServicesComponent
  ]
})
export class ClientModule { }
