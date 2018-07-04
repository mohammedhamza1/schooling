import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeventsComponent } from './tevents.component';

describe('TeventsComponent', () => {
  let component: TeventsComponent;
  let fixture: ComponentFixture<TeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
