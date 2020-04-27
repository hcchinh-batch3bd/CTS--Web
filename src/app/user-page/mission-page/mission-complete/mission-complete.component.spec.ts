import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionCompleteComponent } from './mission-complete.component';

describe('MissionCompleteComponent', () => {
  let component: MissionCompleteComponent;
  let fixture: ComponentFixture<MissionCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
