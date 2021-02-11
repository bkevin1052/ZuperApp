import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  servicios = [];
  constructor(

    private router: Router

  ) { }

  ngOnInit() {
  }


  getFoto(servicio: any){

    if (servicio.nombre === 'Plomeria') {
      return 'https://raw.githubusercontent.com/bkevin1052/Handy/master/Splash%20screen%20icons/leaking.png'
    } else if (servicio.nombre === 'Pintura') {
      return 'https://raw.githubusercontent.com/bkevin1052/Handy/master/Splash%20screen%20icons/paint-roller.png'
    } else if (servicio.nombre === 'Reparacion'){
      return 'https://raw.githubusercontent.com/bkevin1052/Handy/master/Splash%20screen%20icons/wrench.png'
    } else if (servicio.nombre === 'Limpieza') {
      return 'https://raw.githubusercontent.com/bkevin1052/Handy/master/Home%20icon/cleanin.png'
    } else {
      return
    }
  }

}
