import { TestBed } from '@angular/core/testing';

import { CategoriaListaService } from './categoria-lista.service';

describe('CategoriaListaService', () => {
  let service: CategoriaListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
