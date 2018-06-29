import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnotificationsComponent } from './pnotifications.component';

describe('PnotificationsComponent', () => {
  let component: PnotificationsComponent;
  let fixture: ComponentFixture<PnotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
