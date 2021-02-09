import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  login(){
    this.router.navigate(['/home']);
  }

  register(){
    this.router.navigate(['/register']);
  }

  forgotpassword(){
    this.router.navigate(['/forgotpassword']);
  }

  ngOnInit() {
  }
}
