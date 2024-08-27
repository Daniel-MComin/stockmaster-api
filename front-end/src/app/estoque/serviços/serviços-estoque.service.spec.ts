import { TestBed } from '@angular/core/testing';

import { ServiçosEstoqueService } from './serviços-estoque.service';

describe('ServiçosEstoqueService', () => {
  let service: ServiçosEstoqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiçosEstoqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
