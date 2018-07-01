import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AparentsComponent } from './aparents.component';

describe('AparentsComponent', () => {
  let component: AparentsComponent;
  let fixture: ComponentFixture<AparentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AparentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AparentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
