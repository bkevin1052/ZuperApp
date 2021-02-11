import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  form_cambiocontrasenia!: FormGroup;
  imagenresource = 'https://raw.githubusercontent.com/bkevin1052/ZuperApp/master/ZuperApp/icons/ZuperApp.png';

  constructor(private fb:FormBuilder,
    private route:Router) {

  }

  cambioPassword() {
      this.route.navigateByUrl('home');
  }

  ngOnInit(): void {

    this.form_cambiocontrasenia = this.fb.group({
      inputPassword:['',[Validators.required]],
      inputNewPassword:['',[Validators.required]],
      inputConfirmPassword:['',[Validators.required]]
    })
  }

}
