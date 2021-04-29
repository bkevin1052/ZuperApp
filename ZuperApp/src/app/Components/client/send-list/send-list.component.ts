import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-send-list',
  templateUrl: './send-list.component.html',
  styleUrls: ['./send-list.component.css']
})
export class SendListComponent implements OnInit {

  form_send!:FormGroup;

  constructor(

    private fb:FormBuilder,
    private router: Router,
    private authService: AuthService

  ) {

    this.authService.checkLogInStatus();
  }


  SendList(){

    alert("Lista enviada correctamente");

    this.router.navigate(['/home']);


  }

  ngOnInit() {

    this.form_send = this.fb.group({
      list: ['', [
        Validators.required
      ]],
      enviar: ['', [
        Validators.required
      ]]
    })
  }

}
