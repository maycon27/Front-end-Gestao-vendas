import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaProdutoListaComponent } from './venda-produto-lista.component';

describe('VendaProdutoListaComponent', () => {
  let component: VendaProdutoListaComponent;
  let fixture: ComponentFixture<VendaProdutoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaProdutoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaProdutoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
