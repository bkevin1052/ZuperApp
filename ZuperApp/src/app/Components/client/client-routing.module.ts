import { AddItemsComponent } from './add-items/add-items.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { NewListComponent } from './new-list/new-list.component';
import { SendListComponent } from './send-list/send-list.component';
import { ServicesComponent } from './services/services.component';
import { ConfigurationComponent } from './configuration/configuration.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'Profile', component: ProfileComponent },
      { path: 'Edit-Profile', component: EditProfileComponent },
      { path: 'Change-Password', component: ChangePasswordComponent },
      { path: 'List-Menu', component: ListMenuComponent },
      { path: 'Edit-List', component: EditListComponent },
      { path: 'New-List', component: NewListComponent },
      { path: 'Send-List', component: SendListComponent },
      { path: 'Services', component: ServicesComponent },
      { path: 'VerItems/:id', component: ViewItemsComponent },
      { path: 'AddItems/:id', component: AddItemsComponent },
      { path: 'Configuration', component: ConfigurationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientRoutingModule { }
