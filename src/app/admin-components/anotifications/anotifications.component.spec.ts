import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotificationsComponent } from './anotifications.component';

describe('AnotificationsComponent', () => {
  let component: AnotificationsComponent;
  let fixture: ComponentFixture<AnotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
