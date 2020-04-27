import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAccountComponent } from './section-account.component';

describe('SectionAccountComponent', () => {
  let component: SectionAccountComponent;
  let fixture: ComponentFixture<SectionAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
