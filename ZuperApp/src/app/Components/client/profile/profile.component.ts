import { Component, Input, OnInit } from '@angular/core';
import { PerfilUsuario } from "../../models/perfil.usuario";
import { PerfilService } from '../../services/Perfil/perfil.service';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  ///despues del más se tiene que poner el codigo que devuelve el api, para la imagen que está almacenada en el server
  imagenresource = 'https://raw.githubusercontent.com/bkevin1052/ZuperApp/master/ZuperApp/icons/ZuperApp.png';

  cookie!: PerfilUsuario;
  constructor(private api: PerfilService, private authService: AuthService) {
    this.getPerfil();
    this.authService.checkLogInStatus();
  }

  getPerfil() {
    this.api.GetProfile({ username: localStorage.getItem('username') }).subscribe((data) => {
      this.cookie = data
      //console.log(data);
    })
  }

  ngOnInit(): void {

  }
}
