import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AddItems } from './add-items.service';

describe('AddItems', () => {
  let service: AddItems;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(AddItems);
  });

  it('Servicio para obtener datos de direccion creado correctamente', () => {
    expect(service).toBeTruthy();
  });
});
