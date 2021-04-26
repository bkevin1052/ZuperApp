import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CreateList } from './new-list.service';

describe('CreateList', () => {
  let service: CreateList;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(CreateList);
  });

  it('Servicio para obtener datos de direccion creado correctamente', () => {
    expect(service).toBeTruthy();
  });
});
