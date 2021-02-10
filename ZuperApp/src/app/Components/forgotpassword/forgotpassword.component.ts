import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router ) {  }

  ngOnInit() {
  }

  resetPassword(){
    alert("Envio de recuperación de contraseña correcto");
    this.router.navigateByUrl('/login')
  }

}
