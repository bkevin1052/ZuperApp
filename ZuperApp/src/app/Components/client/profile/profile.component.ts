import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

   ///despues del más se tiene que poner el codigo que devuelve el api, para la imagen que está almacenada en el server
   imagenresource = 'https://raw.githubusercontent.com/bkevin1052/ZuperApp/master/ZuperApp/icons/ZuperApp.png';
  constructor(){
  }

  ngOnInit(): void {

  }
}
