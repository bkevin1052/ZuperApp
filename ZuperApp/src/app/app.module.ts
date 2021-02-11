import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from "./Components/login/login.module";
import { ForgotPasswordComponent } from "./Components/forgotpassword/forgotpassword.component";
import { RegisterComponent } from "./Components/register/register.component";
import { ClientRoutingModule } from './Components/client/client-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoginModule,
    ClientRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
