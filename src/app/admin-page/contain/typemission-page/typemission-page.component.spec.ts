import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypemissionPageComponent } from './typemission-page.component';

describe('TypemissionPageComponent', () => {
  let component: TypemissionPageComponent;
  let fixture: ComponentFixture<TypemissionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypemissionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypemissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
