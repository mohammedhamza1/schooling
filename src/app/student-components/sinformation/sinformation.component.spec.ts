import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinformationComponent } from './sinformation.component';

describe('SinformationComponent', () => {
  let component: SinformationComponent;
  let fixture: ComponentFixture<SinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
