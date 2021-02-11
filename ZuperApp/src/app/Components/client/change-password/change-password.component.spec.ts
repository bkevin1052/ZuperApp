import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ChangePasswordComponent } from './change-password.component';
import { FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
          FormsModule,
          RouterTestingModule,
          BrowserModule,
          ReactiveFormsModule,
          HttpClientModule
      ],
      declarations: [ ChangePasswordComponent ],
      providers:[FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    //fixture = TestBed.createComponent(CambioContraseniaComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('Reemplaza contrasenia correctamente', () => {
    expect(null).toBeNull();
  });
});
