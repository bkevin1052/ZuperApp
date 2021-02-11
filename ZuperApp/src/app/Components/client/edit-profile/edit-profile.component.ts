import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  form_editar!:FormGroup;


  //se tiene que setear esta variable cuando se cargue la información
  nombre_user = "Kevin Estuardo Barrientos Calderon";

  ///despues del más se tiene que poner el codigo que devuelve el api, para la imagen que está almacenada en el server
  imagenresource = 'https://raw.githubusercontent.com/bkevin1052/ZuperApp/master/ZuperApp/icons/ZuperApp.png';
  foto = new Array<File>();


  constructor(private fb:FormBuilder,private router:Router) {
  }

  ngOnInit(): void {

    this.form_editar = this.fb.group({
      Nombre:['',[Validators.required]],
      Apellido:['',[Validators.required]],
      Correo:['',[Validators.required]],
      Telefono:['',[Validators.required]],
      Foto:['']
    })

  }
}
