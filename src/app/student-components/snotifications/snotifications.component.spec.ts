import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnotificationsComponent } from './snotifications.component';

describe('SnotificationsComponent', () => {
  let component: SnotificationsComponent;
  let fixture: ComponentFixture<SnotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
