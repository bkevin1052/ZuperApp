import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(

    private router: Router,
    private fb: FormBuilder

  ) { }

  ngOnInit() {
  }

  register(){
    alert("Registro enviado correctamente");
    this.router.navigateByUrl('/login')
  }

}
