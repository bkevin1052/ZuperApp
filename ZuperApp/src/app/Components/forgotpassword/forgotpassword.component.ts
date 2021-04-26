import { UpdatePassword } from './../services/UpdatePassword/update-password.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  form_forgot: FormGroup;

  constructor(
    private fb: FormBuilder,
    private APIService:UpdatePassword,private route:Router) {

      this.form_forgot = this.fb.group({
        email: ['', [
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ]]
      })

     }

  ngOnInit() {


  }

  resetPassword(){

    this.APIService.ActualizarPassword(this.form_forgot.value).subscribe( (res)=>{
      console.log(res)
      if(res.codigo == '201'){
        this.route.navigate(['./login']);
        alert(res.mensaje)
      }else{

        alert(res.mensaje)
      }

      });
  }
}
