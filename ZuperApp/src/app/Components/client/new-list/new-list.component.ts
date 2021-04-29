import { CreateList } from './../../services/NewList/new-list.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {


  form_nueva:FormGroup;

  constructor(

    private fb:FormBuilder,
    private router: Router,
    private APIService:CreateList,
    private authService: AuthService
  ) {

    this.form_nueva = this.fb.group({
      name: ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.required
      ]]
    })

    this.authService.checkLogInStatus();

   }

  CrearLista(){

    console.log(this.form_nueva.controls.name.value);
    console.log(this.form_nueva.controls.description.value);


    let formData = new FormData();
    let username =  localStorage.getItem('username');
    if(username){
        //Solicitud a la API

        formData.append('name',this.form_nueva.controls.name.value);
        formData.append('description',this.form_nueva.controls.description.value);
        formData.append('username',username);
        console.log(formData)
        this.APIService.crearLista(formData).subscribe((data)=>{

      ///Accion que muestra que fue enviado correctamente
        //console.log(data)
        this.router.navigate(['/Edit-List']);
        return;

        },
        (error: any) => {
             alert(error);
            return;
        });
    }else{
      alert('Error al crear Lista, por favor intentar nuevamente.');
    }
  }

  ngOnInit() {
  }
}
