import { UpdateProfilePassword } from './../../services/UpdateProfilePassword/update-profile-password.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  form_cambiocontrasenia!: FormGroup;
  imagenresource = 'https://raw.githubusercontent.com/bkevin1052/ZuperApp/master/ZuperApp/icons/ZuperApp.png';

  constructor(private fb:FormBuilder,
    private APIService:UpdateProfilePassword,private route:Router,private authService: AuthService) {

      this.authService.checkLogInStatus();


  }

  cambioPassword() {

    let formData = new FormData();
    let username =  localStorage.getItem('username');
    if(username){
    formData.append('username',username);
    formData.append('inputPassword',this.form_cambiocontrasenia.controls.inputPassword.value);
    formData.append('inputNewPassword',this.form_cambiocontrasenia.controls.inputNewPassword.value);
    formData.append('inputConfirmPassword',this.form_cambiocontrasenia.controls.inputConfirmPassword.value);
    console.log(formData)

    var pass = this.form_cambiocontrasenia.controls.inputNewPassword.value;
    var Confpass = this.form_cambiocontrasenia.controls.inputConfirmPassword.value;

    if(pass = Confpass){

      this.APIService.ActualizarProfilePassword(formData).subscribe( (res)=>{
        console.log(res)
        if(res.codigo == '201'){
          alert(res.mensaje)
          this.route.navigate(['./login']);
        }else{

          alert(res.mensaje)
          this.route.navigateByUrl('home');
        }

        });

    }else{

      alert('Contraseñas diferentes,favor verificar.');
    }
    }else{

      alert('Error en la actualizacion');
    }
  }

  ngOnInit(): void {

    this.form_cambiocontrasenia = this.fb.group({
      inputPassword:['',[Validators.required]],
      inputNewPassword:['',[Validators.required]],
      inputConfirmPassword:['',[Validators.required]]
    })
  }

}
