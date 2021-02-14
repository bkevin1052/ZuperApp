import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form_register!:FormGroup;

  constructor(

    private router: Router,
    private fb: FormBuilder

  ) { }

  register(){
    alert("Success sending registration");
    this.router.navigate(['/login']);
  }

  ngOnInit() {

    this.form_register = this.fb.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]],
      confirmPassword: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]]
    })
  }
}
