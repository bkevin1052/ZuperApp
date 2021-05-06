import { AddItems } from './../../services/AddItems/add-items.service';
import { Product } from './../../models/Product';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-list',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  form_edit: FormGroup;

  cookie!: Product[];
  x: any;

  constructor(

    private fb: FormBuilder,
    private router: ActivatedRoute,
    private api: AddItems,
    private authService: AuthService

  ) {

    this.form_edit = this.fb.group({
      list: ['', [
        Validators.required
      ]]
    })

    this.getProducts();
    this.authService.checkLogInStatus();

  }



  AddProduct(product: Product) {

    let formData = new FormData();
    this.x = this.router.snapshot.paramMap.get('id');
    formData.append('name', product.name)
    formData.append('description', product.description);
    formData.append('price', product.price.toString());
    formData.append('id', this.x);

    this.api.AddItems(formData).subscribe((data) => {
      if (data.codigo == '100') {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
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

  getProducts() {
    this.api.getProducts().subscribe((data) => {
      this.cookie = data;
    })
  }

  ngOnInit() {
  }
}
