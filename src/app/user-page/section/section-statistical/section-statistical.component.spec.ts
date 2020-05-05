import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStatisticalComponent } from './section-statistical.component';

describe('SectionStatisticalComponent', () => {
  let component: SectionStatisticalComponent;
  let fixture: ComponentFixture<SectionStatisticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionStatisticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStatisticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
