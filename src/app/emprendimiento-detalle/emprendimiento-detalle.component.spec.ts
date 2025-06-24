import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprendimientoDetalleComponent } from './emprendimiento-detalle.component';

describe('EmprendimientoDetalleComponent', () => {
  let component: EmprendimientoDetalleComponent;
  let fixture: ComponentFixture<EmprendimientoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmprendimientoDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprendimientoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
