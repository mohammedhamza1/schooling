import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnotificationsComponent } from './tnotifications.component';

describe('TnotificationsComponent', () => {
  let component: TnotificationsComponent;
  let fixture: ComponentFixture<TnotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
