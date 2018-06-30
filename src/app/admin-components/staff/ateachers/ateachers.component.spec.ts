import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AteachersComponent } from './ateachers.component';

describe('AteachersComponent', () => {
  let component: AteachersComponent;
  let fixture: ComponentFixture<AteachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AteachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
