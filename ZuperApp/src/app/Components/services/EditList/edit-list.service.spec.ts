import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { EditList } from './edit-list.service';

describe('EditList', () => {
  let service: EditList;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(EditList);
  });

  it('Servicio para obtener datos de direccion creado correctamente', () => {
    expect(service).toBeTruthy();
  });
});
