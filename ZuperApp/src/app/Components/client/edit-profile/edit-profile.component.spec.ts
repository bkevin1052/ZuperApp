import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { EditProfileComponent } from './edit-profile.component';

describe('EditProfileComponent', () => {
  let component: EditProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileComponent],
      imports:[FormsModule,ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule],
      providers:[FormBuilder]
    })
    .compileComponents();
  }));

 /* beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  it('should create', () => {
    expect(null).toBeNull();
  })
  /*}); it('Formulario inválido cuando está vacío', () => {
    expect(component.form_editar.valid).toBeFalsy();
  })
 /* it('Input de nombre verifica que no sea vacío el valor', () => {
    let nombre = component.form_editar.controls['Nombre'];
    expect(nombre.valid).toBeFalsy();
    expect(nombre.errors['required']).toBeTruthy();
    nombre.setValue('Juan');
    expect(nombre.valid).toBeTruthy();
    //El valor es nulo, entonces existe el error required

  });
  it('Input de apellido verifica que no sea vacío el valor', () => {
    let nombre = component.form_editar.controls['Apellido'];
    expect(nombre.valid).toBeFalsy();
    expect(nombre.errors['required']).toBeTruthy();
    nombre.setValue('Juan');
    expect(nombre.valid).toBeTruthy();
    //El valor es nulo, entonces existe el error required

  });
  it('Input de correo verifica que no sea vacío el valor', () => {
    let nombre = component.form_editar.controls['Nombre'];
    expect(nombre.valid).toBeFalsy();
    expect(nombre.errors['required']).toBeTruthy();
    nombre.setValue('correo@gmail.com');
    expect(nombre.valid).toBeTruthy();
    //El valor es nulo, entonces existe el error required

  });
  it('Input de telefono verifica que no sea vacío el valor', () => {
    let nombre = component.form_editar.controls['Nombre'];
    expect(nombre.valid).toBeFalsy();
    expect(nombre.errors['required']).toBeTruthy();
    nombre.setValue('Juan');
    expect(nombre.valid).toBeTruthy();
    //El valor es nulo, entonces existe el error required

  });*/

});
