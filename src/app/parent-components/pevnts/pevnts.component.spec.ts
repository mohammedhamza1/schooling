import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PevntsComponent } from './pevnts.component';

describe('PevntsComponent', () => {
  let component: PevntsComponent;
  let fixture: ComponentFixture<PevntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PevntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PevntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
