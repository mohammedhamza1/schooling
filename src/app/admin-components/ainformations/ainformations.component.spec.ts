import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AinformationsComponent } from './ainformations.component';

describe('AinformationsComponent', () => {
  let component: AinformationsComponent;
  let fixture: ComponentFixture<AinformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AinformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AinformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
