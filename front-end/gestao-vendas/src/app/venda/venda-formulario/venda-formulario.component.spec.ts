import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaFormularioComponent } from './venda-formulario.component';

describe('VendaFormularioComponent', () => {
  let component: VendaFormularioComponent;
  let fixture: ComponentFixture<VendaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
