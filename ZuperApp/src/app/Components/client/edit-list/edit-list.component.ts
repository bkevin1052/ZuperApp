import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  form_edit!:FormGroup;

  constructor(

    private fb:FormBuilder,
    private router: Router

  ) { }

  EditList(){
  }

  ngOnInit() {
    this.form_edit = this.fb.group({
      list: ['', [
        Validators.required
      ]]
    })
  }

}
