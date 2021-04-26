import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../services/auth/auth.service";
import { User } from "../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form_login:FormGroup;
  user: User;


  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {

    this.form_login = this.fb.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    })
   }


  login(){

    var aux = this.form_login.value as User;
    this.user = aux;
    this.authService.signIn(this.form_login.value).subscribe( (res)=>{
    console.log(res)
    if(res.codigo == '100'){
      this.router.navigate(['Client/home']);
    }else{
      this.router.navigate(['./login']);
      alert(res.mensaje)
    }

    });
  }

  ngOnInit():void {

  }
}
