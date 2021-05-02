import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SendList } from './send-list.service';

describe('SendList', () => {
  let service: SendList;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(SendList);
  });

  it('Servicio para obtener datos de direccion creado correctamente', () => {
    expect(service).toBeTruthy();
  });
});
