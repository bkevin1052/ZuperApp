import { ViewItems } from './../../services/ViewItems/view-items.service';
import { List } from './../../models/List';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  form_edit:FormGroup;

  cookie!:List[];

  constructor(

    private fb:FormBuilder,
    private router: ActivatedRoute,
    private api:ViewItems,
    private authService: AuthService

  ) {

    this.form_edit = this.fb.group({
      list: ['', [
        Validators.required
      ]]
    })

    this.getItems();
    this.authService.checkLogInStatus();

   }



  EditList(){
  }

  getItems(){
    var x = this.router.snapshot.paramMap.get('id');
    this.api.getItems({_id:x}).subscribe((data)=>{
      this.cookie = data;
      //console.log(this.cookie);
     })
 }

  ngOnInit() {
  }
}
