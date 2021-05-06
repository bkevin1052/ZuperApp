import { EditProfile } from './../../services/UpdateProfile/edit-profile.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCookie } from '@fortawesome/free-solid-svg-icons';
import { PerfilUsuario } from "../../models/perfil.usuario";
import { PerfilService } from '../../services/Perfil/perfil.service';
import { AuthService } from './../../services/auth/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  form_editar: FormGroup;


  //se tiene que setear esta variable cuando se cargue la información
  nombre_user = ''

  ///despues del más se tiene que poner el codigo que devuelve el api, para la imagen que está almacenada en el server
  imagenresource = 'https://raw.githubusercontent.com/bkevin1052/ZuperApp/master/ZuperApp/icons/ZuperApp.png';


  cookie!: PerfilUsuario;

  constructor(private fb: FormBuilder, private router: Router, private api: PerfilService, private api2: EditProfile, private authService: AuthService,) {

    this.form_editar = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    })

    this.getPerfil();

    this.authService.checkLogInStatus();

  }




  EditarPerfil() {
    //Solicitud a la API
    let formData = new FormData();
    let username = localStorage.getItem('username');
    if (username) {

      formData.append('email', this.form_editar.controls.email.value);
      formData.append('name', this.form_editar.controls.name.value);
      formData.append('username', username);
      formData.append('surname', this.form_editar.controls.surname.value);
      formData.append('phone', this.form_editar.controls.phone.value);

      this.api2.EditProfile(formData).subscribe((data) => {
        this.router.navigate(['home']);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      },
        (error: any) => {
          alert(error);
          return;
        });
    } else {

      Swal.fire({
        icon: 'error',
        title: 'Oops...Error en la actualizacion!',
        text: 'Por favor intentar nuevamente.',
        footer: '<a href>Why do I have this issue?</a>'
      })
    }
  }

  getPerfil() {
    this.api.GetProfile({ username: localStorage.getItem('username') }).subscribe((data) => {
      this.cookie = data
      //console.log(data);
    })
  }

  ngOnInit(): void {

    //let cookies = JSON.parse(localStorage.getItem("user"));

  }
}
