import { List } from './../../models/List';
import { EditList } from './../../services/EditList/edit-list.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  form_edit: FormGroup;

  cookie!: List[];

  constructor(

    private fb: FormBuilder,
    private router: Router,
    private api: EditList,
    private authService: AuthService

  ) {

    this.form_edit = this.fb.group({
      list: ['', [
        Validators.required
      ]]
    })

    this.getListas();
    this.authService.checkLogInStatus();

  }



  EliminarList(id: any) {
    console.log(id)
    this.api.eliminarLista({ _id: id }).subscribe((data) => {

      if (data.codigo == '100') {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['Client/Edit-List']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...Error en la actualizacion!',
          text: 'Por favor intentar nuevamente.',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }
    })
  }

  getListas() {
    this.api.getListas({ username: localStorage.getItem('username') }).subscribe((data) => {
      this.cookie = data;
      //console.log(this.cookie);
    })
  }

  ngOnInit() {
  }
}
