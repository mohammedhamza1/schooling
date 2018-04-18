import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDegreesComponent } from './final-degrees.component';

describe('FinalDegreesComponent', () => {
  let component: FinalDegreesComponent;
  let fixture: ComponentFixture<FinalDegreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalDegreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
