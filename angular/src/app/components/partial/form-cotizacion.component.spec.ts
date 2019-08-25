import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCotizacionComponent } from './form-cotizacion.component';

describe('FormCotizacionComponent', () => {
  let component: FormCotizacionComponent;
  let fixture: ComponentFixture<FormCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
