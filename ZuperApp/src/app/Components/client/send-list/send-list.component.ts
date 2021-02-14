import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-list',
  templateUrl: './send-list.component.html',
  styleUrls: ['./send-list.component.css']
})
export class SendListComponent implements OnInit {

  form_send!:FormGroup;

  constructor(

    private fb:FormBuilder,
    private router: Router

  ) { }


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
