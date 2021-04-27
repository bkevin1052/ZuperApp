import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ViewItems } from './view-items.service';

describe('ViewItems', () => {
  let service: ViewItems;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(ViewItems);
  });

  it('Servicio para obtener datos de direccion creado correctamente', () => {
    expect(service).toBeTruthy();
  });
});
