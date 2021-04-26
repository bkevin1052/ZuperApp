import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { EditProfile } from './edit-profile.service';

describe('EditProfile', () => {
  let service: EditProfile;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(EditProfile);
  });

  it('Servicio para obtener datos de direccion creado correctamente', () => {
    expect(service).toBeTruthy();
  });
});
