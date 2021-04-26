import { List } from './../../models/List';
import { EditList } from './../../services/EditList/edit-list.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  form_edit:FormGroup;

  cookie!: List;

  constructor(

    private fb:FormBuilder,
    private router: Router,
    private api:EditList

  ) {

    this.form_edit = this.fb.group({
      list: ['', [
        Validators.required
      ]]
    })

    this.getListas();

   }



  EditList(){
  }

  servicios:[];


  getListas(){
    this.api.getListas({username:localStorage.getItem('username')}).subscribe((data)=>{
      this.servicios = data;
      this.cookie = data;
      console.log(this.servicios);
      console.log(this.cookie);
     })
 }

  ngOnInit() {
  }
}
