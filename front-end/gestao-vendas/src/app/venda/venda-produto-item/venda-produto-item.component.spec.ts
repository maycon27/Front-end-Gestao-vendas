import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaProdutoItemComponent } from './venda-produto-item.component';

describe('VendaProdutoItemComponent', () => {
  let component: VendaProdutoItemComponent;
  let fixture: ComponentFixture<VendaProdutoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaProdutoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaProdutoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
