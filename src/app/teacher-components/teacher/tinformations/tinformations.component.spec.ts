import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinformationsComponent } from './tinformations.component';

describe('TinformationsComponent', () => {
  let component: TinformationsComponent;
  let fixture: ComponentFixture<TinformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
