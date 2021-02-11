import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from "./Components/forgotpassword/forgotpassword.component";
import { RegisterComponent } from "./Components/register/register.component";

const ClientModule = () => import('./Components/client/client.module').then(x => x.ClientModule);

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'Client', loadChildren: ClientModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
