import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComousarComponent } from './comousar.component';

describe('ComousarComponent', () => {
  let component: ComousarComponent;
  let fixture: ComponentFixture<ComousarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComousarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComousarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
