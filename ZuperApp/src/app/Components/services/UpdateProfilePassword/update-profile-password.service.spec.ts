import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { UpdateProfilePassword } from './update-profile-password.service';

describe('UpdateProfilePassword', () => {
  let service: UpdateProfilePassword;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(UpdateProfilePassword);
  });

  it('Servicio para obtener datos de direccion creado correctamente', () => {
    expect(service).toBeTruthy();
  });
});
