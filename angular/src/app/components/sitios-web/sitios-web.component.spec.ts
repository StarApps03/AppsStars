import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitiosWebComponent } from './sitios-web.component';

describe('SitiosWebComponent', () => {
  let component: SitiosWebComponent;
  let fixture: ComponentFixture<SitiosWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitiosWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitiosWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
