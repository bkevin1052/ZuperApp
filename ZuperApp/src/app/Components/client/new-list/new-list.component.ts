import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {


  form_nueva!:FormGroup;

  constructor(

    private fb:FormBuilder,
    private router: Router
  ) { }

  CrearLista(){

    alert("Lista creada");
    this.router.navigate(['/home']);

  }

  ngOnInit() {

    this.form_nueva = this.fb.group({
      name: ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.required
      ]]
    })
  }

}
