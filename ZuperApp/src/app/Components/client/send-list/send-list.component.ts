import { Component, OnInit } from '@angular/core';
import { List } from './../../models/List';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { SendList } from './../../services/SendList/send-list.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-send-list',
  templateUrl: './send-list.component.html',
  styleUrls: ['./send-list.component.css']
})
export class SendListComponent implements OnInit {

  form_send!:FormGroup;
  cookie!:List[];

  constructor(

    private fb:FormBuilder,
    private router: Router,
    private authService: AuthService,
    private api:SendList

  ) {

    this.form_send = this.fb.group({
      list: ['', [Validators.required]],
      email:['',[Validators.required]]
    })

    this.getListas();
    this.authService.checkLogInStatus();
  }


  SendList(){

    this.api.SendLista(this.form_send).subscribe((data)=>{

      if(data.codigo == '100'){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...Error en la actualizacion!',
          text: 'Por favor intentar nuevamente.',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }

     })

     //this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

  getListas(){
    this.api.getListas({username:localStorage.getItem('username')}).subscribe((data)=>{
      this.cookie = data;
      //console.log(this.cookie);
     })
    }
}
