import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PattendanceComponent } from './pattendance.component';

describe('PattendanceComponent', () => {
  let component: PattendanceComponent;
  let fixture: ComponentFixture<PattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
