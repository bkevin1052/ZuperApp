import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from "./Components/login/login.module";
import { ForgotPasswordComponent } from "./Components/forgotpassword/forgotpassword.component";
import { RegisterComponent } from "./Components/register/register.component";
import { HomeComponent } from "./Components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
