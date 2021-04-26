import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PerfilUsuario } from './perfil.service';

describe('PerfilUsuario', () => {
  let service: PerfilUsuario;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(PerfilUsuario);
  });

  it('Servicio para obtener datos de direccion creado correctamente', () => {
    expect(service).toBeTruthy();
  });
});
