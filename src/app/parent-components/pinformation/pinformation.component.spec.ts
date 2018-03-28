import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinformationComponent } from './pinformation.component';

describe('PinformationComponent', () => {
  let component: PinformationComponent;
  let fixture: ComponentFixture<PinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
