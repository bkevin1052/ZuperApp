import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form_login!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  login(){
    this.router.navigate(['Client']);
  }

  ngOnInit():void {
    this.form_login = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }
}
