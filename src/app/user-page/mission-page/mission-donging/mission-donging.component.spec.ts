import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionDongingComponent } from './mission-donging.component';

describe('MissionDongingComponent', () => {
  let component: MissionDongingComponent;
  let fixture: ComponentFixture<MissionDongingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionDongingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionDongingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
