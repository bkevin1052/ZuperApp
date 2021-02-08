import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //form_inicio:FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  login(){
    //var aux = this.form_inicio.value;

  }

  ngOnInit() {
    /*this.form_inicio = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]],
      password: ['', [
        Validators.required
      ]],
      role: ['', [
        Validators.required,
        Validators.pattern("client|handler")
      ]]
    })*/
  }
}
